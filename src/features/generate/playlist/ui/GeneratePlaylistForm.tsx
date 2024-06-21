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
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<PlaylistInputs>({
    mode: 'onTouched',
  })

  const token = localStorage.getItem('token')

  const onSubmit = (data: PlaylistInputs) => {
    const formatData = {
      ...data,
      isLoFi: data.isLoFi === 'true',
      isAbstract: data.isAbstract === 'true',
      token: token,
    }
    generateCover(formatData)
  }

  const urlValidation: RegExp = new RegExp(
    /^(https?:\/\/)?(www\.)?(open\.spotify\.com\/playlist\/)[a-zA-Z0-9]+.*$/,
  )

  // const selectStyles: StylesConfig<VibesOptions, false> = {
  //   control: provided => ({
  //     ...provided,
  //     minWidth: 2,
  //   }),
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
                pattern: {
                  value: urlValidation,
                  message: 'Make sure you copied the entire URL from Spotify.',
                },
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
          <div>
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
                  // styles={selectStyles}
                />
              )}
            />
          </div>
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
