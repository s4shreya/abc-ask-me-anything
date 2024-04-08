import { useState } from "react";

import ContentContainer from "./ContentContainer";
import Header from "./Header";
import QuestionInput from "./QuestionInput";

const PdfInteractionPanel = () => {
  const [question, setQuestion] = useState("");
  const [QAList, setQAList] = useState([]);

  const onQuestionSubmit = () => {
    console.log(`question is ${question}`);
    const tempArr = [...QAList];
    const qaObject = {
      question: question,
      answer: null,
    };
    tempArr.push(qaObject);
    setQAList(tempArr);
    setQuestion("");
  };

  return (
    <div>
      <Header />
      <ContentContainer QAList={QAList} />
      <QuestionInput
        question={question}
        onQuestionSubmit={onQuestionSubmit}
        setQuestion={setQuestion}
      />
    </div>
  );
};
export default PdfInteractionPanel;
