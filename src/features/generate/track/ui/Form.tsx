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
import { TrackBody, TrackInputs } from 'shared/types/generate'
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

interface GenerateTrackFormProps {
  generateTrack: (data: TrackBody) => void
}
const Form = ({ generateTrack }: GenerateTrackFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    // reset,
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
    // reset()
    resetCurrentTags()
    generateTrack({
      title: data.title,
      mood: data.mood.split(','),
      object: data.object,
      surrounding: data.surrounding,
      coverDescription: data.coverDescription.split(','),
      isLoFi: data.isLoFi === 'true',
    })
  }

  useEffect(() => {
    setValue('mood', currentTags.moodTags)
    setValue('coverDescription', currentTags.styleTags)
  }, [currentTags, setValue])

  useEffect(() => {
    setValue('title', formState.title)
    setValue('mood', formState.mood)
    setValue('object', formState.object)
    setValue('surrounding', formState.surrounding)
    setValue('coverDescription', formState.coverDescription)
    setValue('isLoFi', formState.isLoFi)
  }, [formState, setValue])

  return (
    <StyledCard>
      <Title>Generate cover for track or album</Title>
      <STrackForm onSubmit={handleSubmit(onSubmit)}>
        <Label>
          Title
          <StyledInput
            {...register('title', {
              required: true,
            })}
            type="text"
            placeholder="Enter title of your track or album..."
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
            <InputRadio {...register('isLoFi')} value="true" checked />
            Lo-Fi
          </RadioLabel>
          <RadioLabel>
            <InputRadio {...register('isLoFi')} value="false" />
            Hi-Fi
          </RadioLabel>
        </RadioButtonsWrappers>

        <ArrowButton isDisabled={isValid} />
      </STrackForm>

      {/* <ul>
        {Object.keys(formState).map(row => (
          <li>{`${row}: ${formState[row]}`}</li>
        ))}
      </ul> */}
    </StyledCard>
  )
}

export default Form
