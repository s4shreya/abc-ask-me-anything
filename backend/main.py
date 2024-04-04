from fastapi import FastAPI, File, UploadFile, HTTPException, Depends
from fastapi.responses import JSONResponse
from typing import Annotated
import models
from sqlalchemy.orm import Session
from database import SessionLocal, engine
from fastapi.middleware.cors import CORSMiddleware
import os
from models import PDF

# creates an object/instance of FastAPI()
app = FastAPI()

# list of allowed origins to connect to our FastAPI application
origins = ["http://localhost:5173"]

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


# API endpoints of our application

@app.post("/upload/")
async def upload_pdf(file: UploadFile = File(...)):
    # Save file to disk
    with open(file.filename, "wb") as f:
        f.write(await file.read())

    # Store file in database
    db = SessionLocal()
    db_pdf = PDF(filename=file.filename, content=f.name)
    db.add(db_pdf)
    db.commit()
    db.refresh(db_pdf)
    db.close()

    return JSONResponse(
        status_code=201, content={"message": "File uploaded successfully"}
    )
