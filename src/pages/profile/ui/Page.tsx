import { Link, Navigate } from 'react-router-dom'
import s from './styles.module.scss'
import { useRegistration } from 'features/registration/byEmail/model/registrationSlice'

const Page = () => {
  const isLoggedIn = useRegistration(state => state.isLoggedIn)
  const username = useRegistration(state => state.user?.username)
  const logOut = useRegistration(state => state.logOut)

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" />
  } else {
    return (
      <div className={s.wrapper}>
        <h2>{`@${username}`}</h2>
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
      </div>
    )
  }
}

export default Page
