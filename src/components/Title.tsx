import { useContext } from 'react'
import { Store } from '../context'

export default function Title() {
  const { state } = useContext(Store)
  const { question, answer, match } = state
  return (
    <div>
      The <span className="font-bold">{question.targetText}</span> of the&nbsp;
      <span className={`text-${question.color} font-bold`}>
        {question.descriptionText}
      </span>
      &nbsp;is? | answer: {answer}, match: {match.toString()}
    </div>
  )
}
