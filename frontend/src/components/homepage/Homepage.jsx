import { Link } from "react-router-dom";

import styles from "./Homepage.module.css";
import homepage_logo from "../../assets/images/homepage_logo.svg";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <header className={styles.header}>
        <img src={homepage_logo} alt="AI Planet logo" height={41} width={105} />
        <nav className={styles.navbar}>
          <ul>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Models</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles["main-section"]}>
        <section className={styles["sub-heading"]}>
          <h1>
            We make reliable <br />
            <span className={styles["ai-text"]}>AI accessible</span> for all
          </h1>
        </section>
        <section className={styles["center-buttons"]}>
          <button>
            <Link to="/upload">Upload new PDF</Link>
          </button>
          <button>
            <Link to={"/documents"}>List uploaded PDFs</Link>
          </button>
        </section>
        <section className={styles.description}>
          <p>
            Gen AI has enormous potential, but hindered by privacy and
            reliability issues including hallucinations and inaccuracies.
            Unlocking AI's potential, we enable enterprises with secure and
            reliable Generative AI applications.
          </p>
        </section>
      </main>
    </div>
  );
};
export default Homepage;
