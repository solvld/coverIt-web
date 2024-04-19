import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import s from './style.module.scss'
import Arrow from 'shared/assets/images/arrow-next.svg?react'
import { useRegistration } from 'features/registration/byEmail/model/registrationSlice'
import { InputError } from 'shared/ui/InputError'
import { ZodType, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { LogInInputs } from 'shared/types/auth'
import { useSignIn } from 'shared/services/queries.tsx'
import { Toaster } from 'sonner'

const logInSchema: ZodType<LogInInputs> = z.object({
  email: z
    .string()
    .min(1, { message: 'Поле обязательно к заполнению' })
    .email({ message: 'Неверный формат email' }),
  password: z
    .string()
    .min(1, { message: 'Поле обязательно к заполнению' })
    .min(8, { message: 'Пароль слишком короткий' }),
})

const LoginForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<LogInInputs>({
    mode: 'onTouched',
    resolver: zodResolver(logInSchema),
  })

  const signIn = useRegistration(state => state.signIn)

  const { mutate: logIn, isPending } = useSignIn()

  const onSubmit = (loginData: LogInInputs) => {
    //  alert(JSON.stringify(data))
    signIn(loginData.email, loginData.password)
    logIn(loginData)
  }

  return (
    <>
      <div className={s.wrapper}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputWrapper}>
            <label htmlFor="">Email address:</label>
            <input
              {...register('email', {
                required: 'Поле обязательно к заполнению',
              })}
              type="email"
              placeholder="Enter your email address"
            />
            <InputError>
              {errors?.email && <p>{errors?.email?.message || 'error'}</p>}
            </InputError>
          </div>

          <div className={s.inputWrapper}>
            <label htmlFor="">Password:</label>
            <input
              type="password"
              {...register('password', {
                required: 'Поле обязательно к заполнению',
              })}
              placeholder="Enter your password"
            />
            <InputError>
              {errors?.password && (
                <p>{errors?.password?.message || 'error'}</p>
              )}
            </InputError>
          </div>

          <Link to={'/sign-up'}>Create an account</Link>

          {isPending ? (
            <div>loading...</div>
          ) : (
            <button type="submit">
              {isValid ? <Arrow /> : <Arrow style={{ opacity: '0.1' }} />}
            </button>
          )}
        </form>
      </div>
      <Toaster
        position="bottom-center"
        visibleToasts={2}
        toastOptions={{
          className: s.toast,
        }}
      />
    </>
  )
}

export default LoginForm
