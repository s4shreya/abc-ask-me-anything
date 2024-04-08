# Ask Me Anything App - Full Stack web application


## Technologies and tools used
1.  Frontend: React.js
2.  Backend: FastAPI
3.  Database: SQLite
4.  Tools: SQLAlchemy, CORS middleware, axios, python-multipart, PyMuPDF
5.  NLP: langchain
6.  LLM Model: OpenAI

## Installation setup for frontend
```
cd frontend/
npm install
npm run dev
```

## Installation setup for backend FastAPI
1.  Create a virtual environment for the python code in FastAPI application:
```
py -m venv env                                       // creates a virtual environment for the project
```
2.  Activate virtual environment
```
env/Scripts/activate                                 // we can use any name instead of env
```
3.  Install dependencies
```
pip install -r requirements.txt               // installs all the dependencies mentioned in the requirements.txt file
```
4.  To start the FastAPI application
```
cd backend/
uvicorn main:app --reload
```

## Usage of application
The Ask Me Anything app allows users to upload PDF and then ask questions based on it. The application processes the text of the uploaded PDF and then outputs an answer to the asked question.

### Note:
1. Add a config.js file in the frontend directory that contains the backend URL as:
```
export const BASE_URL = "http://localhost:8000";
```
2. Add the OpenAI API key in the .env file in the backend directory to use the OpenAI llm model.
```
export OPENAI_API_KEY="xxxx"
```
3. Get the OpenAI API key from: https://platform.openai.com/api-keys
