import SignUpForm from 'features/registration/byEmail'
import s from './styles.module.scss'

const Page = () => {
  return (
    <div className={s.wrapper}>
      <SignUpForm />
    </div>
  )
}

export default Page
