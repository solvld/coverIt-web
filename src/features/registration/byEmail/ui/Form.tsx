import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import s from './style.module.scss'
import Arrow from 'shared/assets/images/arrow-next.svg?react'
import { useRegistration } from '../model/registrationSlice'
import { InputError } from 'shared/ui/InputError'

type SignUpInputs = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

//заменить на нормальную валидацию
const emailValidatePattern =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const SignUpForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<SignUpInputs>({ mode: 'all' })

  const navigate = useNavigate()

  const signUp = useRegistration(state => state.signUp)

  const onSubmit = (data: SignUpInputs) => {
    // alert(JSON.stringify(data))
    signUp(data)
    navigate('/profile')
    reset()
  }

  return (
    <div className={s.wrapper}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username</label>
        <input
          type="text"
          {...register('username', {
            required: 'Поле обязательно к заполнению',
          })}
          placeholder="Enter your username"
          autoComplete="username"
        />
        <InputError>
          {errors?.username && <p>{errors?.username?.message || 'error'}</p>}
        </InputError>
        <label>Email address:</label>
        <input
          {...register('email', {
            required: 'Поле обязательно к заполнению',
            pattern: {
              value: emailValidatePattern,
              message: 'Неверный формат email',
            },
          })}
          type="email"
          placeholder="Enter your email address"
        />
        <InputError>
          {errors?.email && <p>{errors?.email?.message || 'error'}</p>}
        </InputError>

        <label htmlFor="">Password:</label>
        <input
          type="password"
          {...register('password', {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 8,
              message: 'Минимум 8 символов',
            },
          })}
          placeholder="Enter password"
          autoComplete="new-password"
        />
        <InputError>
          {errors?.password && <p>{errors?.password?.message || 'error'}</p>}
        </InputError>
        <input
          type="password"
          {...register('confirmPassword', {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 8,
              message: 'Минимум 8 символов',
            },
          })}
          placeholder="Confirm password"
        />
        <InputError>
          {errors?.password && (
            <p>{errors?.confirmPassword?.message || 'error'}</p>
          )}
        </InputError>

        <button type="submit">
          {isValid ? <Arrow /> : <Arrow style={{ opacity: '0.1' }} />}
        </button>
      </form>
    </div>
  )
}

export default SignUpForm
