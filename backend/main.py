from fastapi import FastAPI, File, UploadFile, HTTPException, Depends, Body
from fastapi.responses import JSONResponse
from typing import Annotated, List
import models
from sqlalchemy.orm import Session
from database import SessionLocal, engine
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
import os
from models import PDF, Question
import fitz  # PyMuPDF

# creates an object/instance of FastAPI()
app = FastAPI()

# list of allowed origins to connect to our FastAPI application
origins = [
    "http://localhost:5173",
    "https://abc-ask-me-anything-frontend.vercel.app",
]

# handles CORS policy
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# creates database and it makes sure that our database connection only opens
# when request comes in and always closes after the request is completed
def get_database():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()  # always close the database connection when done


# creates dependency injection for our application
db_dependency = Annotated[Session, Depends(get_database)]

# creates database and its tables, columns automatically when this FastAPI application is created
models.Base.metadata.create_all(bind=engine)


# extracts text from pdf file using PyMuPDF
def extract_text_from_pdf(file_path: str) -> str:
    text = ""
    try:
        with fitz.open(file_path) as doc:
            for page in doc:
                text += page.get_text()
    except Exception as e:
        print(f"Error extracting text from PDF: {e}")
    return text


# API endpoints of our application


# post API to upload pdf document and save it in uploaded_pdfs folder
@app.post("/upload/")
async def upload_pdf(file: UploadFile = File(...)):
    # Create a directory to store the files if it doesn't exist
    if not os.path.exists("uploaded_pdfs"):
        os.makedirs("uploaded_pdfs")

    # Save the uploaded file to the specified directory
    with open(f"uploaded_pdfs/{file.filename}", "wb") as f:
        f.write(await file.read())

    # Extract text from the uploaded PDF
    file_path = f"uploaded_pdfs/{file.filename}"
    text = extract_text_from_pdf(file_path)

    # Get file size
    file_size = os.path.getsize(file_path)

    # Store file in database
    db = SessionLocal()
    db_pdf = PDF(
        filename=file.filename, content=text, upload_date=datetime.now(), size=file_size
    )
    db.add(db_pdf)
    db.commit()
    # db.refresh(db_pdf)
    db.close()

    return JSONResponse(
        status_code=201,
        content={"message": "File uploaded and text extracted successfully"},
    )


# get API to retreive all the pdfs and metadata from SQLite database
@app.get("/pdfs/")
def get_all_pdfs():
    db = SessionLocal()
    pdfs = db.query(PDF).all()
    db.close()
    return pdfs


# post API to store question asked by user in the database
@app.post("/questions/")
async def create_question(
    question: str = Body(...), db: Session = Depends(get_database)
):
    db_question = Question(question=question)
    db.add(db_question)
    db.commit()
    db.refresh(db_question)
    return db_question


# get API to get all the data from questions table
@app.get("/questions/")
def get_questions(db: Session = Depends(get_database)):
    questions = db.query(Question).all()
    return questions
