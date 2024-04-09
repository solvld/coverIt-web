import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import s from './style.module.scss'
import Arrow from 'shared/assets/images/arrow-next.svg?react'
import { useRegistration } from 'features/registration/byEmail/model/registrationSlice'

type LogInInputs = {
  email: string
  password: string
}

//заменить на нормальную валидацию
const emailValidatePattern =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const LoginForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<LogInInputs>({ mode: 'onBlur' })

  const navigate = useNavigate()

  const signIn = useRegistration(state => state.signIn)

  const onSubmit = (data: LogInInputs) => {
    // alert(JSON.stringify(data))
    signIn(data.email, data.password)
    data.email ? navigate('/profile') : null
    reset()
  }

  return (
    <div className={s.wrapper}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Email address:</label>
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
        <div>{errors?.email && <p>{errors?.email?.message || 'error'}</p>}</div>

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
          placeholder="Enter your password"
        />
        <div>
          {errors?.password && <p>{errors?.password?.message || 'error'}</p>}
        </div>
        <Link to={'/sign-up'}>Create an account</Link>
        <button type="submit" disabled={!isValid}>
          {isValid ? <Arrow /> : null}
        </button>
      </form>
    </div>
  )
}

export default LoginForm
