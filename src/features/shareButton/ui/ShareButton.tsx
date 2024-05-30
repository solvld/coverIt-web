import Shared from 'shared/assets/images/shared.svg?react'
import { Button } from 'shared/ui/Button'
import { toast } from 'sonner'

export default function ShareButton() {
  const currentUrl = window.location.href

  const saveCurrentUrl = () => {
    window.navigator.clipboard
      .writeText(currentUrl)
      .then(() => toast('Link copied!'))
  }
  return (
    <Button onClick={saveCurrentUrl}>
      <Shared />
      Share
    </Button>
  )
}
