import { useContext } from 'react'
import { Store } from '../context'

export default function Title() {
  const { state } = useContext(Store)
  const { question } = state
  return (
    <div>
      The <span className="font-bold">{question.target}</span> of the&nbsp;
      <span className={`${question.color} font-bold`}>
        {question.descriptionText}
      </span>
      &nbsp;is?
    </div>
  )
}
