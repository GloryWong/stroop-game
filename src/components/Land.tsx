/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FormEvent, useState, useContext } from 'react'
import { DIFFICULTY, STATUS, DEFAULT_DIFFICULTY } from '../constants'
import { Store } from '../context'
import i18n, { useTranslation } from '../i18n'
import Settings from './Settings'

export default function Land() {
  const { state, dispatch } = useContext(Store)
  const { t } = useTranslation()
  function handleClick() {
    ;(dispatch as React.Dispatch<any>)({
      type: 'START_GAME',
    })
  }

  function handleDifficultyChange(e: FormEvent) {
    ;(dispatch as React.Dispatch<any>)({
      type: 'CHANGE_DIFFICULTY',
      payload: (e.target as HTMLInputElement).value,
    })
  }

  const [settingsVisible, setSettingsVisible] = useState(false)

  return (
    <div
      className={`land w-screen h-screen bg-black bg-opacity-90 absolute top-0 left-0 transition-all transform flex flex-col justify-center items-center ${
        state.status === STATUS.RUNNING ? 'scale-0' : 'scale-100'
      }`}
    >
      <div className="mb-5 text-3xl text-gray-200">
        <button
          type="button"
          className="text-5xl mr-2 transition transform hover:rotate-180"
          onClick={() => {
            setSettingsVisible(true)
          }}
        >
          ⚙
        </button>
        <span>Stroop {t('game')}</span>
        <span className="text-xl ml-1.5">v1.0</span>
      </div>
      <div
        className={`status mb-5 p-3 border-2 border-red-300 rounded-2xl ${
          state.status === STATUS.FAILED ? '' : 'hidden'
        }`}
      >
        <div className="text-red-500 text-2xl">
          {t('You failed!'.toLowerCase())}
        </div>
        <div className="text-gray-200 ">
          {t('Score'.toLowerCase())}: {state.score}
        </div>
      </div>
      <div className="difficulty mb-8 text-gray-300 text-3xl border-2 border-gray-300 p-5 rounded-3xl">
        <form
          onChange={handleDifficultyChange}
          className="flex flex-col items-start sm:flex-row"
        >
          {Object.values(DIFFICULTY).map((value) => (
            <label key={value} className="ml-2 mr-2 mt-2 mb-2 cursor-pointer">
              <input
                className=""
                name="difficulty"
                type="radio"
                value={value}
                defaultChecked={value === DEFAULT_DIFFICULTY}
              />
              &nbsp;{t(value.toLowerCase())}
            </label>
          ))}
        </form>
      </div>
      <button
        type="button"
        className="text-6xl transition transform scale-100 hover:scale-110 rounded-2xl p-5 text-gray-200 bg-gradient-to-tr from-red-400 via-yellow-400 via-green-400 to-blue-400"
        onClick={handleClick}
      >
        {t('start')}
      </button>
      <Settings visible={settingsVisible} setVisible={setSettingsVisible} />
    </div>
  )
}
