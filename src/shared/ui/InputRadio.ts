import styled from 'styled-components'

export const InputRadio = styled.input.attrs({ type: 'radio' })<{
  $primary?: boolean
}>`
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  width: 1rem;
  height: 1rem;
  border: 0.15em solid;
  border-color: ${props =>
    props.$primary ? 'var(--primary-color)' : 'var(--text-color)'};
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;

  &::before {
    content: '';
    width: 0.6em;
    height: 0.6em;
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--primary-color);
  }

  &:checked::before {
    transform: scale(1);
  }

  &:disabled {
    cursor: not-allowed;
  }
`
