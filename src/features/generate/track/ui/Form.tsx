import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Selector, SelectorsRow, SelectorsWrapper } from 'shared/ui/Selector'
import { InputRadio } from 'shared/ui/InputRadio'
import {
  RefreshSelectors,
  useRefreshSelectors,
} from 'features/refresh-selectors'
import { useTrackForm } from '../model/formCollectDataSlice'
import { zodResolver } from '@hookform/resolvers/zod'
import { generateTrackSchema } from '../lib/validation'
import {
  GenerateReleaseResponse,
  RegenerateTrackBody,
  TrackBody,
  TrackInputs,
} from 'shared/types/generate'
import {
  ArrowButton,
  RadioButtonsWrappers,
  RadioLabel,
  StyledCard,
  Title,
  Error,
  STrackForm,
  Label,
  StyledInput,
} from 'shared/ui/form'
import { useSearchParams } from 'react-router-dom'

interface GenerateTrackFormProps {
  generateTrack?: (data: TrackBody) => void
  regenerateTrack?: (data: RegenerateTrackBody) => void
  type?: 'edit' | 'generate'
  isGenerateError?: boolean
  data?: GenerateReleaseResponse | null
}
const Form = ({
  generateTrack,
  regenerateTrack,
  type = 'generate',
  isGenerateError = false,
  data,
}: GenerateTrackFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    reset,
  } = useForm<TrackInputs>({
    mode: 'onTouched',
    resolver: zodResolver(generateTrackSchema),
  })

  const setTag = useTrackForm(state => state.setTag)
  const setString = useTrackForm(state => state.setTagFromString)
  const setState = useTrackForm(state => state.setAllData)
  const formState = useTrackForm(state => state.formState)
  const currentTags = useTrackForm(state => state.currentTags)
  const resetCurrentTags = useTrackForm(state => state.resetCurrentTags)

  const token = localStorage.getItem('token')
  const [searchParams] = useSearchParams('')
  const releaseId = searchParams.get('id') || ''

  const {
    data: moodsData,
    refetch: refetchMoods,
    isSuccess: isMoods,
  } = useRefreshSelectors('mood', token)
  const {
    data: stylesData,
    refetch: refetchStyles,
    isSuccess: isStyles,
  } = useRefreshSelectors('style', token)

  const onSubmit = (data: TrackInputs) => {
    setState(data)
    resetCurrentTags()
    if (generateTrack) {
      generateTrack({
        title: data.title,
        mood: data.mood.split(',').slice(0, 5),
        object: data.object,
        surrounding: data.surrounding,
        coverDescription: data.coverDescription.split(',').slice(0, 5),
        isLoFi: data.isLoFi === 'true',
        token: token,
      })
    }
    if (regenerateTrack && releaseId) {
      regenerateTrack({
        title: data.title,
        mood: data.mood.split(',').slice(0, 5),
        object: data.object,
        surrounding: data.surrounding,
        coverDescription: data.coverDescription.split(',').slice(0, 5),
        isLoFi: data.isLoFi === 'true',
        releaseId: Number(releaseId),
        token: token,
      })
    }
  }
  useEffect(() => {
    if (!isGenerateError) {
      reset()
    }
  }, [isGenerateError, reset])

  useEffect(() => {
    setValue('mood', currentTags.moodTags)
    setValue('coverDescription', currentTags.styleTags)
  }, [currentTags, setValue])

  useEffect(() => {
    if (type === 'edit' && data) {
      setValue('title', data.title)
      setValue('mood', formState.mood)
      setValue('object', data.object)
      setValue('surrounding', data.surrounding)
      setValue('coverDescription', formState.coverDescription)
    }
  }, [data, setValue, type, formState])

  return (
    <StyledCard>
      <Title>
        {type === 'generate'
          ? 'Generate cover for release or album'
          : 'Edit cover for release or album'}
      </Title>
      <STrackForm onSubmit={handleSubmit(onSubmit)}>
        <Label>
          Title
          <StyledInput
            {...register('title', {
              required: true,
            })}
            type="text"
            placeholder="Enter title of your track or album..."
            disabled={type === 'edit'}
          />
          <Error>
            {errors?.title && <p>{errors?.title?.message || 'error'}</p>}
          </Error>
        </Label>

        <Label>
          Mood (music)
          <StyledInput
            {...register('mood', {
              required: true,
            })}
            type="text"
            placeholder="foggy, slow, romantic, hyper pop, raw"
            onChange={({ target }) => {
              const { value } = target
              setString(value, 'moodTags')
            }}
          />
        </Label>
        <SelectorsRow>
          <RefreshSelectors onClick={refetchMoods} />
          <SelectorsWrapper>
            {isMoods
              ? moodsData?.map((tag, index) => (
                  <Selector
                    key={index}
                    value={tag}
                    handleOnClick={() => {
                      setTag(tag, 'moodTags')
                    }}
                    checked={currentTags.moodTags.includes(tag)}
                  />
                ))
              : null}
          </SelectorsWrapper>
        </SelectorsRow>
        <Error>
          {errors?.mood && <p>{errors?.mood?.message || 'error'}</p>}
        </Error>

        <Label>Object / Action</Label>
        <StyledInput
          {...register('object', {
            required: true,
          })}
          type="text"
          placeholder="wet stone covered with moss, glows a little"
        />
        <Error>
          {errors?.object && <p>{errors?.object?.message || 'error'}</p>}
        </Error>

        <Label>Surrounding</Label>
        <StyledInput
          {...register('surrounding', {
            required: true,
          })}
          type="text"
          placeholder="forest edge, the sun breaks through the trees"
        />
        <Error>
          {errors?.surrounding && (
            <p>{errors?.surrounding?.message || 'error'}</p>
          )}
        </Error>

        <Label>Style (cover)</Label>
        <StyledInput
          {...register('coverDescription', {
            required: true,
          })}
          type="text"
          placeholder="3D, blurred, mostly in white colors  "
          onChange={({ target }) => {
            const { value } = target
            setString(value, 'styleTags')
          }}
        />
        <SelectorsRow>
          <RefreshSelectors onClick={refetchStyles} />
          <SelectorsWrapper>
            {isStyles &&
              stylesData?.map((tag, index) => (
                <Selector
                  key={index}
                  value={tag}
                  handleOnClick={() => {
                    setTag(tag, 'styleTags')
                  }}
                  checked={currentTags.styleTags.includes(tag)}
                />
              ))}
          </SelectorsWrapper>
        </SelectorsRow>
        <Error>
          {errors?.coverDescription && (
            <p>{errors?.coverDescription?.message || 'error'}</p>
          )}
        </Error>

        <RadioButtonsWrappers>
          <RadioLabel>
            <InputRadio {...register('isLoFi')} value="true" />
            Lo-Fi
          </RadioLabel>
          <RadioLabel>
            <InputRadio {...register('isLoFi')} value="false" />
            Hi-Fi
          </RadioLabel>
        </RadioButtonsWrappers>

        <ArrowButton isDisabled={isValid} />
      </STrackForm>
    </StyledCard>
  )
}

export default Form
