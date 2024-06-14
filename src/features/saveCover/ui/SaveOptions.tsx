import styled from 'styled-components'

export const SaveRadio = styled.input.attrs({ type: 'radio' })`
  -webkit-appearance: none;
  appearance: none;
  width: 0.9rem;
  height: 0.9rem;
  margin-right: 0.375rem;
  border: 1.5px solid var(--black);
  border-radius: 50%;
  display: grid;
  place-content: center;

  &::before {
    content: '';
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 120ms ease-in-out;
    background-color: var(--black);
  }

  &:checked::before {
    opacity: 1;
  }
`

export const SaveOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.715rem;
  padding: 0 1.125rem;
  border-radius: 9999px;
  border: solid 1px;
`
