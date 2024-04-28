import { Link, Navigate } from 'react-router-dom'
import s from './styles.module.scss'
import { Button } from 'shared/ui/Button'

const Page = () => {
  const username = localStorage.getItem('token')
  const logOut = () => localStorage.removeItem('token')

  if (!localStorage.getItem('token')) {
    return <Navigate to="/sign-in" />
  } else {
    return (
      <div className={s.wrapper}>
        <h2>{`@${username}`}</h2>
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
      </div>
    )
  }
}

export default Page
