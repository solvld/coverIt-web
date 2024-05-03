import { useVerify } from 'shared/services/queries'
import Notification from './notification/Notification'
import { useSearchParams } from 'react-router-dom'

const Page = () => {
  const [searchParams] = useSearchParams('')
  const code = searchParams.get('code') || ''

  const { isPending, isSuccess, isError } = useVerify(code)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '70vh',
      }}
    >
      {!code && <Notification status="sent" />}
      {isSuccess && code && <Notification status="success" />}
      {isError && code && <Notification status="fail" />}
      {isPending && <p>Loading...</p>}
    </div>
  )
}

export default Page
