import Notification from './notification/Notification'

const Page = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Notification />
    </div>
  )
}

export default Page
