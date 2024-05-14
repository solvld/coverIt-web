import styled from 'styled-components'
import Arrow from 'shared/assets/images/arrow-next.svg?react'

interface ArrowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  height: 56px;
  width: 56px;
  border-radius: 50%;
  background-color: var(--gray0);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.4s;

  margin-left: auto;

  svg {
    fill: var(--black);
    transition: all 0.5s;
  }

  &:hover {
    background-color: var(--primary-color);
    svg {
      fill: var(--gray0);
    }
  }
  &:disabled {
    background-color: var(--gray1);
    cursor: default;
    svg {
      fill: var(--gray-disabled);
    }
  }
  &:active {
    opacity: 0.7;
  }
`
export default function ArrowButton({ ...rest }: ArrowButtonProps) {
  return (
    <StyledButton type="submit" {...rest}>
      <Arrow />
    </StyledButton>
  )
}
