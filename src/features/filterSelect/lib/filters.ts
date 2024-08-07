export const filters = [
  { value: null, label: '--' },
  { value: 'ABSTRACT', label: 'Abstract' },
  { value: 'NOT_ABSTRACT', label: 'Not abstract' },
  { value: 'LO_FI', label: 'Lo-Fi' },
  { value: 'HI_FI', label: 'Hi-Fi' },
  { value: 'DANCING_FLOOR', label: 'Dancing floor' },
  { value: 'NATURE_DOES_NOT_CARE', label: "Nature doesn't care" },
  { value: 'BREAKING_DOWN', label: 'Breaking down' },
  { value: 'CAMPFIRE_CALMNESS', label: 'Campfire calmness' },
  { value: 'TOUGH_AND_STRAIGHT', label: 'Tough and straight' },
  { value: 'ENDLESS_JOY', label: 'Endless joy' },
]

export type FilterOptions = typeof filters
