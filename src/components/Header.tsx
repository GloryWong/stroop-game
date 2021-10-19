import { useContext } from 'react'
import { Store } from '../context'

export default function Header() {
  const { state } = useContext(Store)
  return (
    <div className="w-full text-gray-400 p-3 flex justify-center items-center">
      <div className="title text-6xl">Stroop</div>
      <div className="score ml-2.5 text-4xl text-gray-700">
        score: {state.score}
      </div>
    </div>
  )
}
