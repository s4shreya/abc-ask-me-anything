import styles from "./DocumentsCard.module.css";
import PDFFileIcon from "../../assets/images/PDF_file_icon.png";

const DocumentsCard = ({ document }) => {
  return (
      <div className={styles.card}>
        <img src={PDFFileIcon} alt="PDF Image" className={styles["card-img"]} />
        <div className={styles["card-content"]}>
          <h3 className={styles["card-title"]}>{document.filename}</h3>
        </div>
      </div>
  );
};
export default DocumentsCard;
