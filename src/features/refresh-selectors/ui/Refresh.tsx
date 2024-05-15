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
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  height: 52px;
  width: 52px;
  border-radius: 55px;
  background-color: var(--gray0);
  svg {
    animation: ${props => (props.$isActive ? rotate : 'none')} 750ms linear
      infinite;
  }
`
interface RefreshSelectorsProps {
  onClick: () => void
}
export const RefreshSelectors = ({ onClick }: RefreshSelectorsProps) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(true)
    onClick()
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
