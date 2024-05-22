import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import styled from 'styled-components'

export const SButton = styled.button`
  all: unset;
  display: flex;
  flex-shrink: 0;
  background-color: var(--gray0);
  color: var(--black);
  padding: 15px 25px;
  border-radius: 55px;
  border: none;
  font-weight: 600;
  font-size: 24px;
  line-height: 108%;
  align-items: center;
  gap: 20px;
  svg {
    stroke: var(--black);
    height: 22px;
    width: 22px;
  }
`
interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode
}
export function Button({ children, ...props }: ButtonProps) {
  return <SButton {...props}>{children}</SButton>
}
