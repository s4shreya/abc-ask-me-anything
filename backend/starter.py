import openai
import retrying
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Access API key
openai_api_key = os.getenv("OPENAI_API_KEY")

openai.api_key = openai_api_key

documents = SimpleDirectoryReader("data").load_data()
index = VectorStoreIndex.from_documents(documents)

# Function to query documents with rate limiting
@retrying.retry(wait_random_min=1000, wait_random_max=2000)
def query_documents(query):
    query_engine = index.as_query_engine()
    return query_engine.query(query)

# Query documents with rate limiting
try:
    response = query_documents("What did the author do growing up?")
    print(response)
except Exception as e:
    print("Error:", e)

# query_engine = index.as_query_engine()
# response = query_engine.query("What did the author do growing up?")
# print(response)