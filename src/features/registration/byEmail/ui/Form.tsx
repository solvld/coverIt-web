import s from './style.module.scss'
import { registrationSchema } from '../lib/registrationValidation'
import Arrow from 'shared/assets/images/arrow-next.svg?react'
import { InputError } from 'shared/ui/InputError'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpInputs } from 'shared/types/auth'
import { useSignUp } from 'shared/services/queries'

const SignUpForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<SignUpInputs>({
    mode: 'onTouched',
    resolver: zodResolver(registrationSchema),
  })

  const { mutate: signUp, isPending } = useSignUp()

  const onSubmit = (sigUpData: SignUpInputs) => {
    const { username, email, password } = sigUpData

    signUp({ username, email, password })
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

        {isPending ? (
          <div>loading...</div>
        ) : (
          <button type="submit">
            {isValid ? <Arrow /> : <Arrow style={{ opacity: '0.1' }} />}
          </button>
        )}
      </form>
    </div>
  )
}

export default SignUpForm
