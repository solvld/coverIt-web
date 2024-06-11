export const getREMValue = () =>
  parseInt(getComputedStyle(document.documentElement).fontSize, 10)
