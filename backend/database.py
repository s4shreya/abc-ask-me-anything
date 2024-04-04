# connects our FastAPI application to our SQLite database

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# creates a database URL for SQLAlchemy
DATABASE_URL = "sqlite:///./pdfs.db"

# creates SQLAlchemy engine
# connect_args is only required for SQLite database to ensure that the same thread request is processed
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

# creates a SessionLocal class where each instance will be a database session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# creates a base class when declarative_base() function returns a class
Base = declarative_base()