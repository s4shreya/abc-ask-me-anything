import { useState } from "react";

import styles from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import { FiPlusCircle } from "react-icons/fi";
import UploadPdfModal from "../upload pdf modal/UploadPdfModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pdfUploadHandler = (file) => {
    console.log(`uploaded file is: ${file}`);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className={styles.header}>
      <img src={logo} alt="AI Planet logo" height={41} width={105} />
      <button className={styles.upload} onClick={openModal}>
        <FiPlusCircle className={styles["add-button"]} />
        Upload PDF
      </button>
      <UploadPdfModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onUpload={pdfUploadHandler}
      />
    </header>
  );
};
export default Header;
