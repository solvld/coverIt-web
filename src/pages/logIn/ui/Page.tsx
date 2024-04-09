import LoginForm from 'features/auth/byEmail'
import s from './styles.module.scss'

const Page = () => {
  return (
    <div className={s.wrapper}>
      <LoginForm />
    </div>
  )
}

export default Page
