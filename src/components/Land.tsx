/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FormEvent, useContext } from 'react'
import { PRIMARY_ELEMENTS, DIFFICULTY, DEFAULT_DIFFICULTY } from '../constants'
import { Store, Status } from '../context'

export default function Land() {
  const colors = PRIMARY_ELEMENTS.map((v) => v.color)
  const { state, dispatch } = useContext(Store)
  function handleClick() {
    ;(dispatch as React.Dispatch<any>)({
      type: 'START_GAME',
    })
  }

  function handleDifficultyChange(e: FormEvent) {
    ;(dispatch as React.Dispatch<any>)({
      type: 'CHANGE_DIFFICULTY',
      payload: Number((e.target as HTMLInputElement).value),
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
      <div className="difficulty mb-8 text-gray-300 text-3xl border-2 border-gray-300 p-5 rounded-3xl">
        <form
          onChange={handleDifficultyChange}
          className="flex flex-col items-start sm:flex-row"
        >
          {DIFFICULTY.map(({ value, title }) => (
            <label key={value} className="ml-2 mr-2 mt-2 mb-2 cursor-pointer">
              <input
                className=""
                name="difficulty"
                type="radio"
                value={value}
                defaultChecked={value === DEFAULT_DIFFICULTY}
              />
              &nbsp;{title}
            </label>
          ))}
        </form>
      </div>
      <button
        type="button"
        className={`text-6xl transition transform scale-100 hover:scale-110 rounded-2xl p-5 text-gray-200 bg-gradient-to-tr from-${colors[0]} via-${colors[1]} via-${colors[2]} to-${colors[3]}`}
        onClick={handleClick}
      >
        START
      </button>
    </div>
  )
}
