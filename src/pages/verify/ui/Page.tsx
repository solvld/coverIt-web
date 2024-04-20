import { useVerify } from 'shared/services/queries'
import Notification from './notification/Notification'
import { useSearchParams } from 'react-router-dom'

const Page = () => {
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code') || ''

  const { isPending, data } = useVerify(code)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {!code && <Notification status="sent" />}
      {data?.data === 'verify_success' && <Notification status="success" />}
      {data?.data === 'verify_fail' && code && <Notification status="fail" />}
      {isPending && <p>Loading</p>}
    </div>
  )
}

export default Page
