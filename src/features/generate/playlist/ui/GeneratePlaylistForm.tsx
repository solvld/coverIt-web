// import { useState } from 'react'
// import { LinearLoading } from 'entities/LinearLoading'
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
  Error,
  Label,
} from 'shared/ui/form'
import { PlaylistInputs } from 'shared/types/generate'

interface PlaylistForm {
  generateCover(data: PlaylistInputs): void
}

const GeneratePlaylistForm = ({ generateCover }: PlaylistForm) => {
  // const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<PlaylistInputs>({
    mode: 'onTouched',
  })

  const onSubmit = (data: PlaylistInputs) => {
    console.log({ ...data, vibe: data.vibe.value })
    const formatData = {
      ...data,
      isLoFi: data.isLoFi === 'true',
      isAbstract: data.isAbstract === 'true',
    }
    generateCover(formatData)
    // setIsLoading(true)
    // setTimeout(() => {
    //   setIsLoading(false)
    // }, 5000)
  }

  // if (isLoading) {
  //   return <LinearLoading>We are cooking your cover...</LinearLoading>
  // }

  return (
    <StyledCard>
      <Title>Generate cover for playlist</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormWrapper>
          <Label>
            <StyledInput
              {...register('link', {
                required: 'Please enter the link',
              })}
              type="url"
              placeholder="Enter Spotify or Yandex Music playlist url..."
            />
            <Error>
              {errors?.link && <p>{errors?.link?.message || 'error'}</p>}
            </Error>
          </Label>

          <InputsRow>
            <RadioButtonsWrappers>
              <RadioLabel>
                <InputRadio
                  {...register('isAbstract', {
                    required: true,
                  })}
                  value="true"
                />
                Abstract
              </RadioLabel>
              <RadioLabel>
                <InputRadio
                  {...register('isAbstract', {
                    required: true,
                  })}
                  value="false"
                />
                Realistic
              </RadioLabel>
            </RadioButtonsWrappers>

            <VerticalBar />

            <RadioButtonsWrappers>
              <RadioLabel>
                <InputRadio
                  {...register('isLoFi', {
                    required: true,
                  })}
                  value="true"
                />
                Lo-Fi
              </RadioLabel>
              <RadioLabel>
                <InputRadio
                  {...register('isLoFi', {
                    required: true,
                  })}
                  value="false"
                />
                Hi-Fi
              </RadioLabel>
            </RadioButtonsWrappers>
          </InputsRow>
          <Controller
            control={control}
            {...register('vibe', {
              required: true,
            })}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Vibe"
                options={vibes}
                className="react-select-container"
                classNamePrefix="custom-select"
              />
            )}
          />
        </FormWrapper>
        <Error>
          {(errors?.isLoFi || errors?.isAbstract || errors?.vibe) && (
            <p>Please select params</p>
          )}
        </Error>

        <ArrowButton isDisabled={isValid} />
      </form>
    </StyledCard>
  )
}

export default GeneratePlaylistForm
