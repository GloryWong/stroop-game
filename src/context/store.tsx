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
export type State = {
  question: Question
  answer: Answer | undefined
  match: boolean
}

export type StoreValue = {
  state: State
  dispatch: React.Dispatch<any> | null
}

const initialState: State = {
  question: createQuestion(),
  answer: undefined,
  match: false,
}

export const Store = React.createContext<StoreValue>({
  state: initialState,
  dispatch: null,
})

function reducer(state: any, action: any) {
  switch (action.type) {
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
      return {
        ...state,
        match,
      }
    }
    default:
      return state
  }
}

export function StoreProvider({ children }: any) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = { state, dispatch }

  return <Store.Provider value={value}>{children}</Store.Provider>
}
