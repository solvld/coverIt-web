import styled from 'styled-components'

export const InputRadio = styled.input.attrs({ type: 'radio' })`
  -webkit-appearance: none;
  appearance: none;
  width: 0.9rem;
  height: 0.9rem;
  margin-right: 0.375rem;
  border: 1.5px solid var(--black);
  border-radius: 3px;
  display: grid;
  place-content: center;

  &::before {
    content: '';
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 3px;
    opacity: 0;
    transition: opacity 120ms ease-in-out;
    background-color: var(--black);
  }

  &:checked::before {
    opacity: 1;
  }
`
