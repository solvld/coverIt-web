import { registrationSchema } from '../lib/registrationValidation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpInputs } from 'shared/types/auth'
import { useSignUp } from 'shared/services/queries'
import {
  ArrowButton,
  FormContent,
  Label,
  StyledCard,
  Title,
  Error,
  StyledInput,
} from 'shared/ui/form'

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
    <StyledCard>
      <Title>Sign Up</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContent>
          <Label>
            Username
            <StyledInput
              type="text"
              {...register('username', {
                required: true,
              })}
              placeholder="Enter your username"
              autoComplete="username"
            />
            <Error>
              {errors?.username && (
                <p>{errors?.username?.message || 'error'}</p>
              )}
            </Error>
          </Label>

          <Label>
            Email address
            <StyledInput
              {...register('email', {
                required: true,
              })}
              type="email"
              placeholder="Enter your email address"
            />
            <Error>
              {errors?.email && <p>{errors?.email?.message || 'error'}</p>}
            </Error>
          </Label>

          <Label>
            Password
            <StyledInput
              type="password"
              {...register('password', {
                required: true,
              })}
              placeholder="Enter password"
              autoComplete="new-password"
            />
            <Error>
              {errors?.password && (
                <p>{errors?.password?.message || 'error'}</p>
              )}
            </Error>
            <StyledInput
              type="password"
              {...register('confirmPassword', {
                required: true,
              })}
              placeholder="Confirm password"
            />
            <Error>
              {errors?.confirmPassword && (
                <p>{errors?.confirmPassword?.message || 'error'}</p>
              )}
            </Error>
          </Label>
        </FormContent>

        {isPending ? (
          <ArrowButton disabled />
        ) : (
          <ArrowButton isDisabled={isValid} />
        )}
      </form>
    </StyledCard>
  )
}

export default SignUpForm
