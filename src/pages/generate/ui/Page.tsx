import { Link } from 'react-router-dom'
import s from './styles.module.scss'
import { Button } from 'shared/ui/Button'

const Generate = () => {
  return (
    <div className={s.wrapper}>
      <h2>generate</h2>
      <Link to={'/generate/playlist'}>
        <Button>playlist cover</Button>
      </Link>
      <Link to={'/generate/track'}>
        <Button>track cover</Button>
      </Link>
    </div>
  )
}

export default Generate
