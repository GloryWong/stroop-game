import React from 'react'
import { getRandomInRange } from '../utils'
import {
  PRIMARY_ELEMENTS,
  TARGET,
  Target,
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
  const [target1, target2] = TARGET
  if (difficulty === Difficulty.EASY) {
    target = target1
  } else if (difficulty === Difficulty.NORMAL) {
    target = target2
  } else {
    target = (() => getRandomInRange(TARGET))()
  }

  console.log(target)

  return {
    target,
    descriptionText: eleLitrality.text,
    value: {
      appearance: eleAppearance.value.appearance,
      literality: eleLitrality.value.literality,
    },
    color: eleAppearance.color,
  }
}

function verifyAnswer(question: Question, answer: Answer) {
  if (question.target.value === Target.LITERALITY) {
    return question.value.literality === answer.literality
  }
  return question.value.appearance === answer.appearance
}

export type Question = ReturnType<typeof createQuestion>
export type Answer = {
  appearance: number
  literality: number
}
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
  difficulty: number
}

export type StoreValue = {
  state: State
  dispatch: React.Dispatch<any> | null
}

const initialState: State = {
  question: createQuestion(DEFAULT_DIFFICULTY),
  answer: undefined,
  match: false,
  score: 0,
  status: Status.READY,
  progress: 0,
  difficulty: DEFAULT_DIFFICULTY,
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
          ...initialState,
          status: Status.RUNNING,
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
        status = Status.FAILED
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
        status: Status.FAILED,
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
