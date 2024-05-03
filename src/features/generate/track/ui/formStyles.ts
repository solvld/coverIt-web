import styled from 'styled-components'

export const FormWrapper = styled.section`
  max-width: 41.25rem;
  min-height: 62rem;
  width: 100%;
  background-color: #fff;
  border-radius: 9px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
  padding: 2rem;
  margin-bottom: 2rem;

  h2 {
    text-align: center;
    font-size: 1.25rem;
    font-weight: 600;
    padding-top: 3.75rem;
  }
`
export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 3rem;
  margin-top: 2rem;
  height: 55rem;

  input[type='text'] {
    all: unset;
    border-bottom: solid 1px;
    line-height: 2.5rem;
  }
  input[type='radio'] {
    margin: 1rem;
  }
  label {
    font-weight: 500;
    font-size: 1rem;
  }
  button[type='submit'] {
    all: unset;
    cursor: pointer;
    justify-self: end;
    margin-left: auto;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  gap: 3.5rem;

  label {
    display: flex;
    align-items: baseline;
    font-weight: 500;
    line-height: 1.5rem;
  }
`
export const Error = styled.div`
  height: 0.8rem;
  p {
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 0.8rem;
    color: var(--primary-color);
  }
`
