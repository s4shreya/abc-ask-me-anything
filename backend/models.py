# creates tables in our SQLite database

from database import Base
from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime


# creates a class that inherits from the Base class
class PDF(Base):
    __tablename__ = (
        "pdfs"  # SQLAlchemy will create a table named pdfs in the SQLite database
    )

    id = Column(Integer, primary_key=True, index=True)
    filename = Column(String, index=True)
    content = Column(Text)
    upload_date = Column(DateTime, default=datetime.now)
    size = Column(Integer)
