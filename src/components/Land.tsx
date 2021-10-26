/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FormEvent, useState, useContext } from 'react'
import { DIFFICULTY, STATUS, DEFAULT_DIFFICULTY } from '../constants'
import { Store } from '../context'
import { useTranslation } from '../i18n'
import Settings from './Settings'

const VERSION = '1.4'

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
      className={`land w-screen h-screen bg-bg dark:bg-bg-dark absolute top-0 left-0 transition-all transform flex flex-col justify-center items-center
      ${
        state.status === STATUS.RUNNING
          ? 'scale-0 bg-opacity-0'
          : 'scale-100 bg-opacity-100'
      }
      `}
    >
      <div className="menu absolute top-0 left-0 mt-5 ml-5">
        <button
          type="button"
          className="absolute transition transform hover:rotate-180 flex justify-center items-center"
          onClick={() => {
            setSettingsVisible(true)
          }}
        >
          <span className="material-icons text-gray-500 dark:text-gray-600">
            settings
          </span>
        </button>
      </div>
      <div className="mb-5 text-3xl text-gray-500 dark:text-gray-600">
        <span>Stroop {t('game')}</span>
        <span className="text-xl ml-1.5">v{VERSION}</span>
      </div>
      <div
        className={`status mb-5 p-3 border-2 border-red-300 dark:border-red-900 rounded-2xl ${
          state.status === STATUS.FAILED ? '' : 'hidden'
        }`}
      >
        <div className="text-red-500 dark:text-red-800 text-2xl">
          {t('You failed!'.toLowerCase())}
        </div>
        <div className="text-gray-500 dark:text-gray-600">
          {t('Score'.toLowerCase())}: {state.score}
        </div>
      </div>
      <div className="difficulty mb-8 text-gray-500 dark:text-gray-600 text-3xl border-2 border-gray-300 dark:border-gray-700 p-5 rounded-3xl">
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
        className="text-6xl transition transform scale-100 hover:scale-110 rounded-2xl p-5 text-gray-100 dark:text-gray-400 bg-gradient-to-tr from-red  dark:from-red-dark via-yellow dark:via-yellow-dark via-green dark:via-green-dark to-blue dark:to-blue-dark"
        onClick={handleClick}
      >
        {t('start')}
      </button>
      <Settings visible={settingsVisible} setVisible={setSettingsVisible} />
    </div>
  )
}
