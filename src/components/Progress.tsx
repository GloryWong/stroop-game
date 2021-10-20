/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext } from 'react'
import { Store } from '../context'
import './Progress.css'

export default function Progress() {
  const { state } = useContext(Store)

  return (
    <div className="progress m-5 w-3/4">
      <div className="progress-bar">
        <div className="bg-gray-300 w-full h-3 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-transparent to-gray-500 h-full w-full rounded-full transition-all"
            style={{ width: `${state.progress}%` }}
          />
        </div>
        {/* <progress
          className="bg-gray-300 w-full h-3 rounded-full"
          max="100"
          value={state.progress}
        /> */}
      </div>
    </div>
  )
}
