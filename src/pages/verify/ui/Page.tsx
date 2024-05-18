import { useVerify } from 'shared/services/queries'
import Notification from './notification/Notification'
import { useSearchParams } from 'react-router-dom'
import { StyledPage } from 'shared/ui/StyledPage'
import { DotsLoader } from 'shared/ui/DotsLoader'

const Page = () => {
  const [searchParams] = useSearchParams('')
  const code = searchParams.get('code') || ''

  const { isPending, isSuccess, isError } = useVerify(code)

  return (
    <StyledPage>
      {!code && <Notification status="sent" />}
      {isSuccess && code && <Notification status="success" />}
      {isError && code && <Notification status="fail" />}
      {isPending && <DotsLoader />}
    </StyledPage>
  )
}

export default Page
