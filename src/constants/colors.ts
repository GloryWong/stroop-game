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
