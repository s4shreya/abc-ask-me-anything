import styles from "./ContentContainer.module.css";

const ContentContainer = ({ QAList }) => {
  return (
    <main className={styles.container}>
      <h2 className={styles["sub-heading"]}>Question-Answers (QA)</h2>
      {QAList.map((qa) => (
        <p className={styles.text}>Q: {qa.question}</p>
      ))}
    </main>
  );
};
export default ContentContainer;
