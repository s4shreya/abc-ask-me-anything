import styles from "./QuestionInput.module.css";
import { LuSendHorizonal } from "react-icons/lu";

const QuestionInput = ({ question, onQuestionSubmit, setQuestion }) => {
  const submitQuestionHandler = (event) => {
    event.preventDefault();
    onQuestionSubmit();
    // Check if question is not empty
    if (question.trim() === "") {
      return;
    }
    // try {
    //   // Submit question to backend
    //   await axios.post("http://your-backend-url/store-question", { question });

    //   // Clear input field
    //   setQuestion("");
    // } catch (error) {
    //   console.error("Error submitting question:", error);
    // }
  };

  return (
    <form className={styles["form-container"]} onSubmit={submitQuestionHandler}>
      <input
        type="text"
        id="question"
        name="question"
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
        className={styles.input}
        placeholder="Send a message..."
      />
      <button type="submit" className={styles["send-button"]}>
        <LuSendHorizonal className={styles["send-icon"]} />
      </button>
    </form>
  );
};
export default QuestionInput;
