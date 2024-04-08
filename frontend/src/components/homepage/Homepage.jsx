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
        <section className="hero">
          <div className="container">
            <h1>Welcome to AIPlanet</h1>
            <p>Explore the future with AI technologies</p>
            <a href="/about" className="btn">
              Learn More
            </a>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <div className="feature">
              <img src="/images/feature1.jpg" alt="Feature 1" />
              <h2>Feature 1</h2>
              <p>Description of feature 1</p>
            </div>
            <div className="feature">
              <img src="/images/feature2.jpg" alt="Feature 2" />
              <h2>Feature 2</h2>
              <p>Description of feature 2</p>
            </div>
            <div className="feature">
              <img src="/images/feature3.jpg" alt="Feature 3" />
              <h2>Feature 3</h2>
              <p>Description of feature 3</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 AIPlanet. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default Homepage;
