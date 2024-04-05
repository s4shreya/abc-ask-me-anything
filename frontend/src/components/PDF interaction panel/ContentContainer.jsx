import styles from './ContentContainer.module.css';

const ContentContainer = ({QAList}) => {
  return (
    <div>ContentContainer:
{QAList.map(qa => 
    <div>{qa.question}</div>)}
    </div>
  )
}
export default ContentContainer