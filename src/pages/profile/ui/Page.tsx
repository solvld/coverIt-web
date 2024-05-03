import { Link, Navigate } from 'react-router-dom'
import s from './styles.module.scss'
import { useCurrentUser } from 'shared/services/queries'

const Page = () => {
  const token = localStorage.getItem('token')
  const logOut = () => localStorage.removeItem('token')

  const { data, isSuccess } = useCurrentUser(token)
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
          <button>liked playlists</button>
        </Link>

        <Link to={'/'}>
          <button>my playlists</button>
        </Link>

        <Link to={'/'}>
          <button>find users</button>
        </Link>

        <Link to={'/sign-in'}>
          <button onClick={logOut}>log out</button>
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
