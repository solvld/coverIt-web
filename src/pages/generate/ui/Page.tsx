import { Link } from 'react-router-dom'
import s from './styles.module.scss'
import { Button } from 'shared/ui/Button'
import { useLogin } from 'features/auth/byEmail'

const Generate = () => {
  const isLoggedIn = useLogin(state => state.isLoggedIn)
  return (
    <div className={s.wrapper}>
      <h2>generate</h2>
      <Link to={'/generate/playlist'}>
        <Button>playlist cover</Button>
      </Link>
      <Link to={isLoggedIn ? '/generate/track' : '/sign-in'}>
        <Button>track cover</Button>
      </Link>
    </div>
  )
}

export default Generate
