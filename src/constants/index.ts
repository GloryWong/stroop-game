export const PRIMARY_ELEMENTS = [
  {
    text: 'RED',
    color: 'red',
    value: {
      appearance: 0,
      literality: 4,
    },
  },
  {
    text: 'YELLOW',
    color: 'yellow',
    value: {
      appearance: 1,
      literality: 5,
    },
  },
  {
    text: 'GREEN',
    color: 'green',
    value: {
      appearance: 2,
      literality: 6,
    },
  },
  {
    text: 'BLUE',
    color: 'blue',
    value: {
      appearance: 3,
      literality: 7,
    },
  },
].map((v) => ({ ...v, color: `${v.color}-400` }))

/** *********************
 * Target
 *********************** */
export enum Target {
  LITERALITY = 0,
  COLOR = 1,
}

export const TARGET = [
  { value: Target.LITERALITY, text: 'literality' },
  { value: Target.COLOR, text: 'color' },
]

/** ******************************
 * Difficulty
 ******************************* */

export enum Difficulty {
  EASY = 0, // Appearance
  NORMAL, // Literality
  HARD, // Mix
}

export const DIFFICULTY = [
  { value: Difficulty.EASY, title: 'Easy' },
  { value: Difficulty.NORMAL, title: 'Normal' },
  { value: Difficulty.HARD, title: 'Hard' },
]

export const DEFAULT_DIFFICULTY = Difficulty.EASY
