import { Toaster } from 'sonner'
import s from './style.module.scss'

export const ToasterOnError = () => {
  return (
    <Toaster
      position="bottom-center"
      visibleToasts={2}
      toastOptions={{
        className: s.toast,
      }}
    />
  )
}
