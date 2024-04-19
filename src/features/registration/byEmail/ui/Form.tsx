import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import s from './style.module.scss'
import Arrow from 'shared/assets/images/arrow-next.svg?react'
import { useRegistration } from '../model/registrationSlice'
import { InputError } from 'shared/ui/InputError'
import { ZodType, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpInputs } from 'shared/types/auth'

const uppercaseRegex = new RegExp(/^(?=.*?[A-Z])/)
const lowercaseRegex = new RegExp(/^(?=.*?[a-z])/)
const digitRegex = new RegExp(/^(?=.*?[0-9])/)
const specialCharRegex = RegExp(/^(?=.*?[#?!@$%^&*-])/)
//пофиксить правило
//const consecutiveRegex = RegExp(/^(?!.*(?:\d){5})(?!.*[a-zA-Z]{5})/)

const SignUpForm = () => {
  const registrationSchema: ZodType<SignUpInputs> = z
    .object({
      username: z
        .string()
        .min(1, { message: 'Поле обязательно к заполнению' })
        .min(2, 'Минимум два символа')
        .max(20),
      email: z
        .string()
        .min(1, { message: 'Поле обязательно к заполнению' })
        .email({ message: 'Неверный формат email' }),
      password: z
        .string()
        .min(1, { message: 'Поле обязательно к заполнению' })
        .min(8, { message: 'Минимум 8 символов' })
        .regex(lowercaseRegex, { message: 'Минимум одна строчная буква' })
        .regex(uppercaseRegex, { message: 'Минимум одна заглавная буква' })
        .regex(digitRegex, { message: 'Минимум одна цифра' })
        .regex(specialCharRegex, { message: 'Минимум один спецсимвол' })
        //.regex(consecutiveRegex, { message: 'Придумай пароль получше ;)' })
        .max(20, { message: 'Максимум 20 символов' }),
      confirmPassword: z
        .string()
        .min(1, { message: 'Поле обязательно к заполнению' })
        .max(20),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: 'Пароль не совпадает :(',
      path: ['confirmPassword'],
    })

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<SignUpInputs>({
    mode: 'onTouched',
    resolver: zodResolver(registrationSchema),
  })

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
            required: true,
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
            required: true,
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
            required: true,
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
            required: true,
          })}
          placeholder="Confirm password"
        />
        <InputError>
          {errors?.confirmPassword && (
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
