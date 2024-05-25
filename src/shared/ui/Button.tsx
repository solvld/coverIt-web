import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import styled from 'styled-components'

export const SButton = styled.button`
  all: unset;
  display: flex;
  flex-shrink: 0;
  background-color: var(--gray0);
  color: var(--black);
  padding: 0.75rem 1.125rem;
  border-radius: 2.5rem;
  border: none;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 108%;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  svg {
    stroke: var(--black);
    height: 1rem;
    width: 1rem;
  }

  a {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &:hover {
    background-color: var(--primary-color);
    color: var(--gray0);
    svg {
      stroke: var(--gray0);
    }
    a {
      color: var(--gray0);
    }
  }
  &:active {
    opacity: 0.8;
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
