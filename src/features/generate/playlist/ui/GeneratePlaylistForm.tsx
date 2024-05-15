// import { useState } from 'react'
import { InputRadio } from 'shared/ui/InputRadio'
import Select from 'react-select'
import { vibes } from '../lib/vibes'
import { Controller, useForm } from 'react-hook-form'
import {
  ArrowButton,
  FormWrapper,
  InputsRow,
  RadioButtonsWrappers,
  RadioLabel,
  StyledCard,
  StyledInput,
  Title,
  VerticalBar,
} from 'shared/ui/form'

interface PlaylistInputs {
  link: string
  vibe: { label: string; value: string }
  isAbstract: boolean
  isLoFi: boolean
}
const GeneratePlaylistForm = () => {
  // const [isLoading, setIsLoading] = useState(false)

  // const handleSubmit = (event: { preventDefault: () => void }) => {
  //   event.preventDefault()
  //   setIsLoading(true)
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 5000)
  // }

  // if (isLoading) {
  //   return <LinearLoading>We are cooking your cover...</LinearLoading>
  // }

  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm<PlaylistInputs>({
    mode: 'onTouched',
  })

  const onSubmit = (data: PlaylistInputs) => {
    alert(JSON.stringify({ ...data, vibe: data.vibe.value }))
  }

  return (
    <StyledCard>
      <Title>Generate cover for playlist</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormWrapper>
          <StyledInput
            {...register('link', {
              required: true,
            })}
            type="url"
            placeholder="Enter Spotify or Yandex Music playlist url..."
          />

          <InputsRow>
            <RadioButtonsWrappers>
              <RadioLabel>
                <InputRadio {...register('isAbstract')} value="true" checked />
                Abstract
              </RadioLabel>
              <RadioLabel>
                <InputRadio {...register('isAbstract')} value="false" />
                Realistic
              </RadioLabel>
            </RadioButtonsWrappers>

            <VerticalBar />

            <RadioButtonsWrappers>
              <RadioLabel>
                <InputRadio {...register('isLoFi')} value="true" checked />
                Lo-Fi
              </RadioLabel>
              <RadioLabel>
                <InputRadio {...register('isLoFi')} value="false" />
                Hi-Fi
              </RadioLabel>
            </RadioButtonsWrappers>
          </InputsRow>
          <Controller
            control={control}
            name="vibe"
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Choose Vibe"
                options={vibes}
                className="react-select-container"
                classNamePrefix="custom-select"
              />
            )}
          />
        </FormWrapper>

        <ArrowButton />
      </form>
    </StyledCard>
  )
}

export default GeneratePlaylistForm
