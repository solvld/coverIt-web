import styled from 'styled-components'

export const Title = styled.h2`
  font-weight: 600;
  font-size: 32px;
  letter-spacing: -0.03em;
`
export const StyledCard = styled.div`
  border-radius: 15px;
  padding: 35px;
  min-width: 610px;
  height: 100%;
  box-shadow: var(--shadow-card);
  background: #fff;
`
export const FormWrapper = styled.div`
  width: 100%;
  max-width: 540px;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 30px;
`
export const StyledURLInput = styled.input.attrs({ type: 'url' })`
  all: unset;
  border-bottom: solid 1px;
  line-height: 2.5rem;
  width: 100%;
  max-width: 540px;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  padding-bottom: 8px;

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
