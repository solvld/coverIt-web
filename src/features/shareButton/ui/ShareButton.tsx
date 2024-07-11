import { toastOnError } from 'entities/ToastOnError'
import Shared from 'shared/assets/images/shared.svg?react'
import { Button } from 'shared/ui/Button'

export default function ShareButton() {
  const currentUrl = window.location.href

  const saveCurrentUrl = () => {
    window.navigator.clipboard
      .writeText(currentUrl)
      .then(() => toastOnError('Link copied!'))
  }
  return (
    <Button onClick={saveCurrentUrl}>
      <Shared />
      Share
    </Button>
  )
}
