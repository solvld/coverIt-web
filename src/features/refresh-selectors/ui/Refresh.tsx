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
  margin: 0.75rem 0;
  height: 2.45rem;
  width: 2.45rem;
  border-radius: 2.5rem;
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
    }, 750)
  }
  return (
    <RefreshButton type="button" $isActive={isActive} onClick={handleClick}>
      <Refresh />
    </RefreshButton>
  )
}
