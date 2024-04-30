import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import Arrow from 'shared/assets/images/arrow-next.svg?react'
import { Selector, SelectorsWrapper } from 'shared/ui/Selector'
import { InputRadio } from 'shared/ui/InputRadio'

import { mood, style } from 'shared/mocks/formSelectors'

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

interface TrackInputs {
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
  } = useForm<TrackInputs>({
    mode: 'onTouched',
  })
  const onSubmit = (data: TrackInputs) => alert(JSON.stringify(data))
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
        />

        <SelectorsWrapper>
          {mood.map((e, index) => (
            <Selector key={index} value={e} />
          ))}
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
          {...register('object', {
            required: true,
          })}
          type="text"
          placeholder="forest edge, the sun breaks through the trees"
        />
        <label htmlFor="">Style (cover)</label>
        <input
          {...register('object', {
            required: true,
          })}
          type="text"
          placeholder="forest edge, the sun breaks through the trees"
        />

        <SelectorsWrapper>
          {style.map((e, index) => (
            <Selector key={index} value={e} />
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
    </FormWrapper>
  )
}

export default Form
