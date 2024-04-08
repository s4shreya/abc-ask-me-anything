import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import { FiPlusCircle } from "react-icons/fi";
import UploadPdfModal from "../upload pdf modal/UploadPdfModal";
import { BASE_URL } from "../../../config";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(null);

  const baseURL = BASE_URL;

  const pdfUploadHandler = async (uploadedFile) => {
    try {
      const formData = new FormData();
      formData.append("file", uploadedFile);
      await axios.post(`${baseURL}/upload/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFileUploaded(uploadedFile.name);
      console.log("File uploaded successfully", uploadedFile.name);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="AI Planet logo" height={41} width={105} />
      </Link>
      {fileUploaded ? (
        <>
          <span className={styles.filename}> {fileUploaded}</span>
          <button className={styles.upload} style={{ background: "green" }}>
            Uploaded PDF
          </button>
        </>
      ) : (
        <button className={styles.upload} onClick={openModal}>
          <FiPlusCircle className={styles["add-button"]} />
          Upload PDF
        </button>
      )}

      <UploadPdfModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onUpload={pdfUploadHandler}
      />
    </header>
  );
};
export default Header;
