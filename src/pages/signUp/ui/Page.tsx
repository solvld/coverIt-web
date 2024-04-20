import s from './styles.module.scss'
import SignUpForm from 'features/registration/byEmail'
import { ToasterOnError } from 'entities/ToastOnError'

const Page = () => {
  return (
    <div className={s.wrapper}>
      <SignUpForm />
      <ToasterOnError />
    </div>
  )
}

export default Page
