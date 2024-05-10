import Reload from 'shared/assets/images/reload.svg?react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`
const RegenerateButton = styled.button<{ $isActive: boolean }>`
  all: unset;
  cursor: pointer;
  /* margin-left: -36px; */
  svg {
    stroke: var(--primary-color);
    animation: ${props => (props.$isActive ? rotate : 'none')} 1000ms linear
      infinite;
  }
`
interface RegenerateProps {
  onClick: () => void
  isRotate: boolean
}

export default function Regenerate({ onClick, isRotate }: RegenerateProps) {
  const handleClick = () => onClick()
  return (
    <RegenerateButton onClick={handleClick} $isActive={isRotate}>
      <Reload />
    </RegenerateButton>
  )
}
