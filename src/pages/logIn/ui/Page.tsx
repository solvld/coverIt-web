import LoginForm from 'features/auth/byEmail'
import { ToasterOnError } from 'entities/ToastOnError'
import { StyledPage } from 'shared/ui/StyledPage'

const Page = () => {
  return (
    <StyledPage>
      <LoginForm />
      <ToasterOnError />
    </StyledPage>
  )
}

export default Page
