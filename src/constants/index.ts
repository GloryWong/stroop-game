import { ValueOf } from 'type-fest'

export const PRIMARY_ELEMENTS = [
  {
    text: 'RED',
    color: 'text-red',
    bgColor: 'bg-red',
    darkColor: 'text-red-dark',
    darkBgColor: 'bg-red-dark',
    value: {
      appearance: 0,
      meaning: 4,
    },
  },
  {
    text: 'YELLOW',
    color: 'text-yellow',
    bgColor: 'bg-yellow',
    darkColor: 'text-yellow-dark',
    darkBgColor: 'bg-yellow-dark',
    value: {
      appearance: 1,
      meaning: 5,
    },
  },
  {
    text: 'GREEN',
    color: 'text-green',
    bgColor: 'bg-green',
    darkColor: 'text-green-dark',
    darkBgColor: 'bg-green-dark',
    value: {
      appearance: 2,
      meaning: 6,
    },
  },
  {
    text: 'BLUE',
    color: 'text-blue',
    bgColor: 'bg-blue',
    darkColor: 'text-blue-dark',
    darkBgColor: 'bg-blue-dark',
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
