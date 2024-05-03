import { useForm } from 'react-hook-form'
import Arrow from 'shared/assets/images/arrow-next.svg?react'
import { Selector, SelectorsWrapper } from 'shared/ui/Selector'
import { InputRadio } from 'shared/ui/InputRadio'
import {
  RefreshSelectors,
  useRefreshSelectors,
} from 'features/refresh-selectors'
import { useTrackForm } from '../model/formCollectDataSlice'
import { useEffect } from 'react'

import { FormWrapper, InputWrapper, SForm } from './formStyles'

export interface TrackInputs {
  title: string
  mood: string
  object: string
  surrounding: string
  coverDescription: string
  isLoFi: boolean
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    setValue,
    reset,
  } = useForm<TrackInputs>({
    mode: 'onTouched',
  })

  const setTag = useTrackForm(state => state.setTag)
  const setString = useTrackForm(state => state.setTagFromString)
  const setState = useTrackForm(state => state.setAllData)
  // const formState = useTrackForm(state => state.formState)
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
    reset()
    resetCurrentTags()
  }

  useEffect(() => {
    setValue('mood', currentTags.moodTags)
    setValue('coverDescription', currentTags.styleTags)
  }, [currentTags, setValue])

  return (
    <FormWrapper>
      <h2>Generate cover for track or album</h2>
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Title</label>
        <input
          {...register('title', {
            required: true,
          })}
          type="text"
          placeholder="Enter title of your track or album..."
        />
        <label htmlFor="">Mood (music)</label>
        <input
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

        <SelectorsWrapper>
          <RefreshSelectors onClick={refetchMoods} />
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

        <label htmlFor="">Object / action</label>
        <input
          {...register('object', {
            required: true,
          })}
          type="text"
          placeholder="wet stone covered with moss, glows a little"
        />
        <label htmlFor="">Surrounding</label>
        <input
          {...register('surrounding', {
            required: true,
          })}
          type="text"
          placeholder="forest edge, the sun breaks through the trees"
        />
        <label htmlFor="">Style (cover)</label>
        <input
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

        <SelectorsWrapper>
          <RefreshSelectors onClick={refetchStyles} />
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

        <InputWrapper>
          <label htmlFor="">
            Lo-fi <InputRadio id="hi-fi" value="true" {...register('isLoFi')} />
          </label>

          <label>
            Hi-Fi
            <InputRadio id="hi-fi" value="false" {...register('isLoFi')} />
          </label>
        </InputWrapper>
        <button type="submit">
          {isValid ? <Arrow /> : <Arrow style={{ opacity: '0.1' }} />}
        </button>
      </SForm>

      {/* <ul>
        {Object.keys(formState).map(row => (
          <li>{`${row}: ${formState[row]}`}</li>
        ))}
      </ul> */}
    </FormWrapper>
  )
}

export default Form
