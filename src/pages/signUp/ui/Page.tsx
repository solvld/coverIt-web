import SignUpForm from 'features/registration/byEmail'
import { ToasterOnError } from 'entities/ToastOnError'
import { StyledPage } from 'shared/ui/StyledPage'

const Page = () => {
  return (
    <StyledPage>
      <SignUpForm />
      <ToasterOnError />
    </StyledPage>
  )
}

export default Page
