import { ICardPosition } from 'entities/coverCard/ui/CoverCard/CoverCard'

export function getRandomNumber(min = 8, max = 25) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const CARDS_LAYOUTS: Array<ICardPosition & { width: number }> = [
  {
    axesX: getRandomNumber(-3, 3),
    axesY: getRandomNumber(-1, 2),
    width: getRandomNumber(),
  },
  {
    axesX: getRandomNumber(-3, 3),
    axesY: getRandomNumber(-1, 2),
    width: getRandomNumber(18, 23),
  },
  {
    axesX: getRandomNumber(-3, 3),
    axesY: getRandomNumber(-1, 4),
    width: getRandomNumber(),
  },
  {
    axesX: getRandomNumber(-4, 4),
    axesY: getRandomNumber(-1, 2),
    width: getRandomNumber(10, 23),
  },
  {
    axesX: getRandomNumber(-3, 6),
    axesY: getRandomNumber(-4, 3),
    width: getRandomNumber(10, 16),
  },
  {
    axesX: getRandomNumber(-3, 4),
    axesY: getRandomNumber(-5, 1),
    width: getRandomNumber(10, 16),
  },
  {
    axesX: getRandomNumber(-3, 6),
    axesY: getRandomNumber(-4, 1),
    width: getRandomNumber(7, 10),
  },
  {
    axesX: getRandomNumber(-3, 3),
    axesY: getRandomNumber(-3, 2),
    width: getRandomNumber(7, 12),
  },
]
