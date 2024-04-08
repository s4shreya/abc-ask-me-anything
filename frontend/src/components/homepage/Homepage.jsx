import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
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
