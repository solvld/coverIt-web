import { Link, Navigate } from 'react-router-dom'
import s from './styles.module.scss'
import { Button } from 'shared/ui/Button'
import { useCurrentUser } from 'shared/services/queries'

const Page = () => {
  // const token = localStorage.getItem('token')
  const logOut = () => localStorage.removeItem('token')

  const { data, isSuccess } = useCurrentUser()
  let username = ''
  if (isSuccess) {
    if (data) {
      username = data.data.username
    }
  }

  if (!localStorage.getItem('token')) {
    return <Navigate to="/sign-in" />
  } else {
    return (
      <div className={s.wrapper}>
        {isSuccess && <h2>{`@${username}`}</h2>}
        <Link to={'/'}>
          <Button>liked playlists</Button>
        </Link>

        <Link to={'/'}>
          <Button>my playlists</Button>
        </Link>

        <Link to={'/'}>
          <Button>find users</Button>
        </Link>

        <Link to={'/sign-in'}>
          <Button onClick={logOut}>log out</Button>
        </Link>

        {/* <ul>
          {isSuccess ? (
            Object.keys(data?.data).map(row => (
              <li>{`${row}: ${data?.data[row]}`}</li>
            ))
          ) : (
            <li>000</li>
          )}
        </ul> */}
      </div>
    )
  }
}

export default Page
