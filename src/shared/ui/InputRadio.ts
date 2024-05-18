import styled from 'styled-components'

export const InputRadio = styled.input.attrs({ type: 'radio' })`
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
  border: 2px solid var(--black);
  border-radius: 4px;
  display: grid;
  place-content: center;

  &::before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 4px;
    opacity: 0;
    transition: opacity 120ms ease-in-out;
    background-color: var(--black);
  }

  &:checked::before {
    opacity: 1;
  }
`
