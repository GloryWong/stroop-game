import React from 'react'
import { getRandomInRange } from '../utils'
import { PRIMARY_ELEMENTS } from '../constants'

function getRandomElement() {
  return getRandomInRange(PRIMARY_ELEMENTS)
}

function createQuestion() {
  const eleAppearance = getRandomElement()
  const eleLitrality = getRandomElement()
  return {
    targetValue: 0,
    targetText: 'color',
    descriptionText: eleLitrality.text,
    value: {
      appearance: eleAppearance.value.appearance,
      literality: eleLitrality.value.literality,
    },
    color: eleAppearance.color,
  }
}

function verifyAnswer(question: Question, answer: Answer) {
  if (question.targetValue === 0) {
    return question.value.appearance === answer
  }
  return question.value.literality === answer
}

export type Question = ReturnType<typeof createQuestion>
export type Answer = number
export enum Status {
  READY = 0,
  RUNNING,
  FAILED,
}
export type State = {
  question: Question
  answer: Answer | undefined
  match: boolean
  score: number
  status: Status
  progress: number
}

export type StoreValue = {
  state: State
  dispatch: React.Dispatch<any> | null
}

const initialState: State = {
  question: createQuestion(),
  answer: undefined,
  match: false,
  score: 0,
  status: Status.READY,
  progress: 0,
}

export const Store = React.createContext<StoreValue>({
  state: initialState,
  dispatch: null,
})

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'START_GAME': {
      if (state.status === Status.READY || state.status === Status.FAILED) {
        return {
          ...state,
          status: Status.RUNNING,
        }
      }
      return state
    }
    case 'CREATE_QUESTION':
      return {
        ...state,
        question: createQuestion(),
      }
    case 'FILL_ANSWER':
      return {
        ...state,
        answer: action.payload,
      }
    case 'VERIFY_ANSWER': {
      const match = verifyAnswer(state.question, state.answer)
      let { score, status, progress } = state
      score += match ? 1 : -1
      progress = 0
      if (score < 0) {
        score = 0
        status = Status.FAILED
      }
      return {
        ...state,
        match,
        score,
        status,
        progress,
      }
    }
    case 'PROGRESS_FORWARD':
      return {
        ...state,
        progress: state.progress + 1,
      }
    case 'FAIL_GAME': {
      console.log('fail game')

      return {
        ...state,
        progress: 0,
        status: Status.FAILED,
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
  if (state.status === Status.RUNNING && !tid) {
    tid = window.setInterval(() => {
      dispatch({
        type: 'PROGRESS_FORWARD',
      })
    }, 50)
  } else if (state.status !== Status.RUNNING) {
    clearInterval(tid)
    tid = 0
  }

  return <Store.Provider value={value}>{children}</Store.Provider>
}
