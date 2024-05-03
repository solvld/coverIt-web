import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import Arrow from 'shared/assets/images/arrow-next.svg?react'
import { Selector, SelectorsWrapper } from 'shared/ui/Selector'
import { InputRadio } from 'shared/ui/InputRadio'
import { RefreshSelectors } from 'features/refresh-selectors'
import { useTrackForm } from '../model/formCollectDataSlice'
import { useEffect } from 'react'
import { useRefreshSelectors } from 'features/refresh-selectors/api/refreshSelectorsQuery'

const FormWrapper = styled.section`
  max-width: 41.25rem;
  min-height: 62rem;
  width: 100%;
  background-color: #fff;
  border-radius: 9px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
  padding: 2rem;
  margin-bottom: 2rem;

  h2 {
    text-align: center;
    font-size: 1.25rem;
    font-weight: 600;
    padding-top: 3.75rem;
  }
`
const SForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 3rem;
  margin-top: 2rem;
  height: 55rem;

  input[type='text'] {
    all: unset;
    border-bottom: solid 1px;
    line-height: 2.5rem;
  }
  input[type='radio'] {
    margin: 1rem;
  }
  label {
    font-weight: 500;
    font-size: 1rem;
  }
  button[type='submit'] {
    all: unset;
    cursor: pointer;
    justify-self: end;
    margin-left: auto;
  }
`
const InputWrapper = styled.div`
  display: flex;
  gap: 3.5rem;

  label {
    display: flex;
    align-items: baseline;
    font-weight: 500;
    line-height: 1.5rem;
  }
`

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
  const formState = useTrackForm(state => state.formState)

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
  }

  //обновлять на основе currentstate
  useEffect(() => {
    setValue('mood', formState.moodTags)
    setValue('coverDescription', formState.coverDescription)
  }, [formState, setValue])

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
                  checked={formState.moodTags.includes(tag)}
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
            setString(value, 'coverDescription')
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
                  setTag(tag, 'coverDescription')
                }}
                checked={formState.coverDescription.includes(tag)}
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
      {/* <p>{JSON.stringify(formState)}</p> */}
    </FormWrapper>
  )
}

export default Form
