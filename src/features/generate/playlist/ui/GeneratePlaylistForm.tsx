import { Select } from 'shared/ui/Select'
import { useState } from 'react'
import { LinearLoading } from 'entities/LinearLoading'
import { InputRadio } from 'shared/ui/InputRadio'
import ArrowButton from 'shared/ui/ArrowButton'
import styled from 'styled-components'

const StyledCard = styled.div`
  border-radius: 15px;
  padding: 35px;
  min-width: 610px;
  height: 100%;
  box-shadow: var(--shadow-card);
  background: #fff;
`
const Title = styled.h2`
  font-weight: 600;
  font-size: 32px;
  letter-spacing: -0.03em;
`
const FormWrapper = styled.div`
  width: 100%;
  max-width: 540px;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 30px;
`
const StyledURLInput = styled.input.attrs({ type: 'url' })`
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
const RadioLabel = styled.label`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
`
const RadioButtonsWrappers = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  gap: 2rem;
`
const InputsRow = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 1rem;
  align-items: center;
`
const VerticalBar = styled.div`
  height: 40px;
  min-width: 2px;
  background-color: var(--gray1);
`

const GeneratePlaylistForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }

  if (isLoading) {
    return <LinearLoading>We are cooking your cover...</LinearLoading>
  }

  return (
    <StyledCard>
      <Title>Generate cover for playlist</Title>
      <form onSubmit={handleSubmit}>
        <FormWrapper>
          <StyledURLInput
            type="url"
            placeholder="Enter Spotify or Yandex Music playlist url..."
          />
          <InputsRow>
            <RadioButtonsWrappers>
              <RadioLabel>
                <InputRadio id="abstract" name="isAbstract" />
                Abstract
              </RadioLabel>
              <RadioLabel>
                <InputRadio id="realistic" name="isAbstract" />
                Realistic
              </RadioLabel>
            </RadioButtonsWrappers>

            <VerticalBar />

            <RadioButtonsWrappers>
              <RadioLabel>
                <InputRadio id="lo-fi" name="isLoFi" />
                Lo-Fi
              </RadioLabel>
              <RadioLabel>
                <InputRadio id="hi-fi" name="isLoFi" />
                Hi-Fi
              </RadioLabel>
            </RadioButtonsWrappers>
          </InputsRow>

          <Select name="select">
            <option value="value1" selected>
              Vibe
            </option>
            <option value="value2">Nice</option>
            <option value="value3">Bumbox</option>
          </Select>
        </FormWrapper>

        <ArrowButton />
      </form>
    </StyledCard>
  )
}

export default GeneratePlaylistForm
