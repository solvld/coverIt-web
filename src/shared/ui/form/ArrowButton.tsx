import styled from 'styled-components'
import Arrow from 'shared/assets/images/arrow-next.svg?react'

interface ArrowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean
}

const StyledButton = styled.button<{ $isDisabled?: boolean }>`
  all: unset;
  cursor: pointer;
  height: 2.625rem;
  width: 2.625rem;
  border-radius: 50%;
  background-color: ${props =>
    props.$isDisabled ? 'var(--gray0)' : 'var(--gray1)'};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.4s;

  margin-left: auto;

  svg {
    fill: ${props =>
      props.$isDisabled ? 'var(--black)' : 'var(--gray-disabled)'};
    transition: all 0.5s;
    height: 1rem;
    width: 1.265rem;
  }

  &:hover {
    background-color: ${props =>
      props.$isDisabled ? 'var(--primary-color)' : 'var(--gray1)'};
    svg {
      fill: ${props =>
        props.$isDisabled ? 'var(--gray0)' : 'var(--gray-disabled)'};
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
export default function ArrowButton({ isDisabled, ...rest }: ArrowButtonProps) {
  return (
    <StyledButton type="submit" $isDisabled={isDisabled} {...rest}>
      <Arrow />
    </StyledButton>
  )
}
