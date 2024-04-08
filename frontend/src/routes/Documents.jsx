// import { BASE_URL } from "../../config";
import axios from "axios";
import { useState, useEffect } from "react";

import DocumentsCard from "../components/documents/DocumentsCard";
import styles from "../components/documents/DocumentsCard.module.css";
import Header from "../components/PDF interaction panel/Header";

const Documents = () => {
  const [loading, setLoading] = useState(false);
  const [documents, setDocuments] = useState([]);

  // const baseURL = BASE_URL;
  const baseURL = "http://localhost:8000";

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURL}/pdfs/`)
      .then((response) => {
        console.log(`documents ${JSON.stringify(response.data)}`);
        setDocuments(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(`!!!error occurred!!! ${error.message}`));
  }, []);

  return (
    <div>
      <Header />
      {loading ? (
        <div>Documents loading. Please wait...</div>
      ) : (
        <div className={styles.container}>
          {documents.length > 0
            ? documents.map((document) => <DocumentsCard document={document} />)
            : "No documents available!"}
        </div>
      )}
    </div>
  );
};
export default Documents;
