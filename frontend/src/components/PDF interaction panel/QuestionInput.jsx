import axios from "axios";

import styles from "./QuestionInput.module.css";
import { LuSendHorizonal } from "react-icons/lu";
import { BASE_URL } from "../../../config";

const QuestionInput = ({ question, onQuestionSubmit, setQuestion }) => {
  const baseURL = BASE_URL;

  const submitQuestionHandler = async (event) => {
    event.preventDefault();
    // Check if question is not empty
    if (question.trim() === "") {
      return;
    }
    try {
      // Submits question to backend
      await axios.post(`${baseURL}questions`, question);

      // Clear input field
      setQuestion("");
    } catch (error) {
      console.error("Error submitting question:", error);
    }
    onQuestionSubmit();
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
