import { toast } from 'sonner'
import Danger from 'shared/assets/images/dangerCircle.svg?react'

export const toastOnError = (errorMessage: string) => {
  toast(errorMessage, {
    duration: 8000,
    icon: <Danger />,
  })
}
