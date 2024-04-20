import s from './styles.module.scss'
import LoginForm from 'features/auth/byEmail'
import { ToasterOnError } from 'entities/ToastOnError'

const Page = () => {
  return (
    <div className={s.wrapper}>
      <LoginForm />
      <ToasterOnError />
    </div>
  )
}

export default Page
