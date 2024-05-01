import { useState } from 'react'
import Refresh from 'shared/assets/images/refresh.svg?react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(-360deg);
  }
`
const RefreshButton = styled.button<{ $isActive: boolean }>`
  all: unset;
  cursor: pointer;
  margin-left: -36px;
  svg {
    animation: ${props => (props.$isActive ? rotate : 'none')} 750ms linear
      infinite;
  }
`

export const RefreshSelectors = () => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive(true)
    setTimeout(() => {
      setIsActive(false)
    }, 1500)
  }
  return (
    <RefreshButton type="button" $isActive={isActive} onClick={handleClick}>
      <Refresh />
    </RefreshButton>
  )
}
