import React from 'react'
import { getRandomInRange } from '../utils'
import {
  PRIMARY_ELEMENTS,
  Status,
  STATUS,
  TARGET,
  DIFFICULTY,
  Difficulty,
  DEFAULT_DIFFICULTY,
} from '../constants'

function getRandomElement() {
  return getRandomInRange(PRIMARY_ELEMENTS)
}

function createQuestion(difficulty: Difficulty) {
  const eleAppearance = getRandomElement()
  const eleLitrality = getRandomElement()
  let target: any
  if (difficulty === DIFFICULTY.EASY) {
    target = TARGET.COLOR
  } else if (difficulty === DIFFICULTY.NORMAL) {
    target = TARGET.MEANING
  } else {
    target = (() => getRandomInRange(Object.values(TARGET)))()
  }

  return {
    target,
    descriptionText: eleLitrality.text,
    value: {
      appearance: eleAppearance.value.appearance,
      meaning: eleLitrality.value.meaning,
    },
    color: eleAppearance.color,
  }
}

function verifyAnswer(question: Question, answer: Answer) {
  if (question.target === TARGET.MEANING) {
    return question.value.meaning === answer.meaning
  }
  return question.value.appearance === answer.appearance
}

export type Question = ReturnType<typeof createQuestion>
export type Answer = {
  appearance: number
  meaning: number
}

export type State = {
  question: Question
  answer: Answer
  match: boolean
  score: number
  status: Status
  progress: number
  difficulty: Difficulty
}

export type StoreValue = {
  state: State
  dispatch: React.Dispatch<any> | null
}

const initialState: State = {
  question: createQuestion(DEFAULT_DIFFICULTY),
  answer: {
    appearance: 0,
    meaning: 0,
  },
  match: false,
  score: 0,
  status: STATUS.READY,
  progress: 0,
  difficulty: DEFAULT_DIFFICULTY,
}

export const Store = React.createContext<StoreValue>({
  state: initialState,
  dispatch: null,
})

function reducer(state: State, action: any) {
  switch (action.type) {
    case 'START_GAME': {
      if (state.status === STATUS.READY || state.status === STATUS.FAILED) {
        return {
          ...initialState,
          status: STATUS.RUNNING,
          difficulty: state.difficulty,
          question: createQuestion(state.difficulty),
        }
      }
      return state
    }
    case 'CREATE_QUESTION':
      return {
        ...state,
        question: createQuestion(state.difficulty),
      }
    case 'FILL_ANSWER':
      return {
        ...state,
        answer: action.payload,
      }
    case 'VERIFY_ANSWER': {
      const match = verifyAnswer(state.question, state.answer)
      let { score, status } = state
      score += match ? 1 : -1
      if (score < 0) {
        score = 0
        status = STATUS.FAILED
      }
      return {
        ...state,
        match,
        score,
        status,
        progress: 0,
      }
    }
    case 'PROGRESS_FORWARD':
      return {
        ...state,
        progress: state.progress + 1,
      }
    case 'FAIL_GAME': {
      return {
        ...state,
        progress: 0,
        status: STATUS.FAILED,
      }
    }
    case 'CHANGE_DIFFICULTY': {
      return {
        ...state,
        difficulty: action.payload,
      }
    }
    default:
      return state
  }
}

let tid = 0
export function StoreProvider({ children }: any) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = { state, dispatch }

  if (state.progress >= 110) {
    dispatch({
      type: 'FAIL_GAME',
    })
    clearInterval(tid)
    tid = 0
  }
  if (state.status === STATUS.RUNNING && !tid) {
    tid = window.setInterval(() => {
      dispatch({
        type: 'PROGRESS_FORWARD',
      })
    }, 50)
  } else if (state.status !== STATUS.RUNNING) {
    clearInterval(tid)
    tid = 0
  }

  return <Store.Provider value={value}>{children}</Store.Provider>
}
