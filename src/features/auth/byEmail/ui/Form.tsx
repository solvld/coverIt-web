import { logInSchema } from '../lib/loginValidation'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LogInInputs } from 'shared/types/auth'
import { useSignIn } from 'shared/services/queries'
import {
  ArrowButton,
  FormContent,
  Label,
  StyledCard,
  Title,
  Error,
  StyledInput,
} from 'shared/ui/form'
import styled from 'styled-components'
import { Button } from 'shared/ui/Button'

const LinkRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LoginForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<LogInInputs>({
    mode: 'onTouched',
    resolver: zodResolver(logInSchema),
  })

  const { mutate: logIn, isPending } = useSignIn()

  const onSubmit = (loginData: LogInInputs) => {
    logIn(loginData)
  }

  return (
    <StyledCard>
      <Title>Log in</Title>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <FormContent>
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

          <Label htmlFor="">
            Password
            <StyledInput
              type="password"
              {...register('password', {
                required: true,
              })}
              placeholder="Enter your password"
            />
            <Error>
              {errors?.password && (
                <p>{errors?.password?.message || 'error'}</p>
              )}
            </Error>
          </Label>
        </FormContent>
        <LinkRow>
          <Button>
            <Link to={'/sign-up'}>Create an account</Link>
          </Button>

          {isPending ? (
            <ArrowButton disabled />
          ) : (
            <ArrowButton isDisabled={isValid} />
          )}
        </LinkRow>
      </form>
    </StyledCard>
  )
}

export default LoginForm
