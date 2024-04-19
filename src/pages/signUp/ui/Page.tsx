import SignUpForm from 'features/registration/byEmail'
import s from './styles.module.scss'
import { Toaster } from 'sonner'

const Page = () => {
  return (
    <div className={s.wrapper}>
      <SignUpForm />
      <Toaster
        position="bottom-center"
        visibleToasts={2}
        toastOptions={{
          className: s.toast,
        }}
      />
    </div>
  )
}

export default Page
