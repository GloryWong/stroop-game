import { ValueOf } from 'type-fest'

export const PRIMARY_ELEMENTS = [
  {
    text: 'RED',
    color: 'text-red-400',
    bgColor: 'bg-red-400',
    value: {
      appearance: 0,
      meaning: 4,
    },
  },
  {
    text: 'YELLOW',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400',
    value: {
      appearance: 1,
      meaning: 5,
    },
  },
  {
    text: 'GREEN',
    color: 'text-green-400',
    bgColor: 'bg-green-400',
    value: {
      appearance: 2,
      meaning: 6,
    },
  },
  {
    text: 'BLUE',
    color: 'text-blue-400',
    bgColor: 'bg-blue-400',
    value: {
      appearance: 3,
      meaning: 7,
    },
  },
]

/** *********************
 * Status
 *********************** */

export const STATUS = {
  READY: 0,
  RUNNING: 1,
  FAILED: 2,
}

export type Status = ValueOf<typeof STATUS>

/** *********************
 * Target
 *********************** */

export const TARGET = {
  MEANING: 'meaning',
  COLOR: 'color',
}

export type Target = ValueOf<typeof TARGET>

/** ******************************
 * Difficulty
 ******************************* */

export const DIFFICULTY = {
  EASY: 'Easy',
  NORMAL: 'Normal',
  HARD: 'Hard',
}

export type Difficulty = ValueOf<typeof DIFFICULTY>
export const DEFAULT_DIFFICULTY = DIFFICULTY.EASY
