import styles from "./QuestionInput.module.css";
import { LuSendHorizonal } from "react-icons/lu"

const QuestionInput = () => {
  const submitQuestionHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles["form-container"]} onSubmit={submitQuestionHandler}>
      <input
        type="text"
        id="question"
        name="question"
        className={styles.input}
        placeholder="Send a message..."
      />
      <button type="submit" className={styles["send-button"]}><LuSendHorizonal className={styles["send-icon"]} /></button>
    </form>
  );
};
export default QuestionInput;
