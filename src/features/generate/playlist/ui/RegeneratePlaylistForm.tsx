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
  Title,
  VerticalBar,
  Error,
} from 'shared/ui/form'
import { RegeneratePlaylistInputs } from 'shared/types/generate'
import { useParams } from 'react-router-dom'

interface PlaylistForm {
  regenerateCover?(data: RegeneratePlaylistInputs): void
  setPopupActive(state: boolean): void
}

export const RegeneratePlaylistForm = ({
  regenerateCover,
  setPopupActive,
}: PlaylistForm) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<RegeneratePlaylistInputs>({
    mode: 'onTouched',
  })

  const { id } = useParams()
  const token = localStorage.getItem('token')

  const onSubmit = (data: RegeneratePlaylistInputs) => {
    const formatData = {
      ...data,
      playlistId: Number(id),
      token: token,
    }
    if (setPopupActive && regenerateCover) {
      // alert(JSON.stringify(formatData))
      regenerateCover(formatData)
      setPopupActive(false)
    }
  }

  return (
    <StyledCard>
      <Title>Regenerate playlist</Title>
      <form onSubmit={handleSubmit(onSubmit)} style={{ paddingTop: '1.4rem' }}>
        <FormWrapper>
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
