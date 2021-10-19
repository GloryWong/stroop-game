import React, { useContext } from 'react'
import { PRIMARY_ELEMENTS } from '../constants'
import { Store, Status } from '../context'

export default function Land() {
  const colors = PRIMARY_ELEMENTS.map((v) => v.color)
  const { state, dispatch } = useContext(Store)
  function handleClick() {
    ;(dispatch as React.Dispatch<any>)({
      type: 'START_GAME',
    })
  }
  return (
    <div
      className={`land w-screen h-screen bg-black bg-opacity-90 absolute top-0 left-0 transition-all transform flex flex-col justify-center items-center scale-${
        state.status === Status.RUNNING ? '0' : '100'
      }`}
    >
      <div className="mb-5 text-3xl text-gray-200">
        Stroop Game<span className="text-xl ml-1.5">v1.0</span>
      </div>
      <div
        className={`status mb-5 p-3 border-2 border-red-300 rounded-2xl ${
          state.status === Status.FAILED ? '' : 'hidden'
        }`}
      >
        <div className="text-red-500 text-2xl">You failed!</div>
        <div className="text-gray-200 ">Score: {state.score}</div>
      </div>
      <button
        type="button"
        className={`text-6xl rounded-2xl p-5 text-gray-200 bg-gradient-to-tr from-${colors[0]} via-${colors[1]} via-${colors[2]} to-${colors[3]}`}
        onClick={handleClick}
      >
        START
      </button>
    </div>
  )
}
