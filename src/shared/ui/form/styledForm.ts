import styled from 'styled-components'

export const Title = styled.h2`
  font-weight: 600;
  font-size: 1.5rem; /* 32px */
  letter-spacing: -0.03em;
  line-height: 1.875rem; /* 40px */
`

export const StyledCard = styled.section`
  border-radius: 0.75rem; /* 15px */
  padding: 1.6rem; /* 35px */
  min-width: 28.6rem; /* 610px */
  /* height: 100%; */
  box-shadow: var(--shadow-card);
  background: var(--background-color);
  margin-bottom: 2rem;
`
export const FormWrapper = styled.div`
  width: 100%;
  max-width: 25.4rem; /* 540px */
  display: flex;
  flex-direction: column;
  /* margin-bottom: 1.4rem; 30px */
`
export const StyledInput = styled.input`
  all: unset;
  padding-top: 0.75rem;
  border-bottom: solid 1px;
  line-height: 2.5rem;
  width: 100%;
  font-weight: 400;
  font-size: 1rem; /* 20px */
  line-height: 160%;
  padding-bottom: 0.375rem;

  &::placeholder {
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    color: var(--gray1);
  }
`
export const RadioLabel = styled.label`
  height: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 160%;
`
export const RadioButtonsWrappers = styled.div`
  width: 100%;
  height: 1.4rem;
  display: flex;
  gap: 1.4rem;
`
export const InputsRow = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 1rem;
`
export const VerticalBar = styled.div`
  height: 1.875rem;
  min-width: 1.5px;
  background-color: var(--gray1);
`
export const Error = styled.div`
  height: 1rem;
  margin-top: 0.4rem;
  p {
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 0.8rem;
    color: var(--primary-color);
  }
`
export const STrackForm = styled.form`
  width: 32.7rem;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  min-height: 26.25;
  height: 100%;
`
export const Label = styled.label`
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: -0.03em;
  line-height: 1.875rem;
  display: flex;
  flex-direction: column;
`
export const FormContent = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
`
