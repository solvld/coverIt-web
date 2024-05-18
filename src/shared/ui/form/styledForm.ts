import styled from 'styled-components'

export const Title = styled.h2`
  font-weight: 600;
  font-size: 32px;
  letter-spacing: -0.03em;
  line-height: 40px;
`
export const StyledCard = styled.section`
  border-radius: 15px;
  padding: 35px;
  min-width: 610px;
  height: 100%;
  box-shadow: var(--shadow-card);
  background: var(--background-color);
  margin-bottom: 2rem;
`
export const FormWrapper = styled.div`
  width: 100%;
  max-width: 540px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 30px;
`
export const StyledInput = styled.input`
  all: unset;
  padding-top: 1rem;
  border-bottom: solid 1px;
  line-height: 2.5rem;
  width: 100%;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  padding-bottom: 0.5rem;

  &::placeholder {
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;
    color: var(--gray1);
  }
`
export const RadioLabel = styled.label`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
`
export const RadioButtonsWrappers = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  gap: 2rem;
`
export const InputsRow = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 1rem;
  align-items: center;
`
export const VerticalBar = styled.div`
  height: 40px;
  min-width: 2px;
  background-color: var(--gray1);
`
export const Error = styled.div`
  height: 1rem;
  margin: 0.5rem 0;
  p {
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 0.8rem;
    color: var(--primary-color);
  }
`
export const STrackForm = styled.form`
  width: 698px;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  min-height: 35rem;
  height: 100%;
`
export const Label = styled.label`
  font-weight: 600;
  font-size: 32px;
  letter-spacing: -0.03em;
  line-height: 40px;
  display: flex;
  flex-direction: column;
`
export const FormContent = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
`
