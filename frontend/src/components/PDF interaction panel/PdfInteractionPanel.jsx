import Header from "./Header";
import QuestionInput from "./QuestionInput";

const PdfInteractionPanel = (props) => {
    const uploaded = props.uploaded;

  return (
    <div>
        <Header />
        <QuestionInput />
    </div>
  )
}
export default PdfInteractionPanel