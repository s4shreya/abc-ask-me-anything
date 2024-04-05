import { useState, useRef } from "react";

import styles from "./UploadPdfModal.module.css";

const UploadPdfModal = ({ isOpen, onClose, onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile);
      setSelectedFile(null);
      fileInputRef.current.value = "";
      onClose();
    } else {
      alert("Please select a file to upload.");
    }
  };

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`${styles.modal} ${isOpen && styles.open}`}
      onClick={handleClickOutside}
    >
      <div className={styles["modal-content"]}>
        <span className={styles["close-button"]} onClick={onClose}>
          &times;
        </span>
        <h2>Upload PDF</h2>
        <div className={styles["input-container"]}>
          <input
            type="file"
            accept=".pdf"
            ref={fileInputRef}
            id={styles["file-input"]}
            onChange={handleFileChange}
          />
        </div>
        <button onClick={handleUpload}>Upload PDF</button>
      </div>
    </div>
  );
};

export default UploadPdfModal;
