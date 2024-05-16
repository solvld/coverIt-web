import { toast } from 'sonner'
import Danger from 'shared/assets/images/dangerCircle.svg?react'

export const toastOnError = (errorMessage: string) => {
  toast(errorMessage, {
    duration: 8000,
    icon: <Danger />,
    style: { width: '610px', margin: '-1.5rem -8rem' },
  })
}
