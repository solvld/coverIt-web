import { DetailedHTMLProps, HTMLAttributes } from 'react'
import Reload from 'shared/assets/images/reload.svg?react'
import { SButton } from 'shared/ui/Button'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`
const RegenerateButton = styled.span<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  svg {
    animation: ${props => (props.$isActive ? rotate : 'none')} 1000ms linear
      infinite;
  }
`
interface RegenerateProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isRotate: boolean
}

export default function Regenerate({ isRotate, ...props }: RegenerateProps) {
  return (
    <SButton {...props}>
      <RegenerateButton $isActive={isRotate}>
        <Reload />
      </RegenerateButton>
      Regenerate
    </SButton>
  )
}
