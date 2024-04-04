import styles from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import { FiPlusCircle } from "react-icons/fi";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="AI Planet logo" height={41} width={105} />
      <span className={styles.upload}>
        <FiPlusCircle className={styles["add-button"]} />
        Upload PDF
      </span>
    </header>
  );
};
export default Header;
