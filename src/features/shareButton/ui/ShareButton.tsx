import Shared from 'shared/assets/images/shared.svg?react'
import { Button } from 'shared/ui/Button'
import { toast } from 'sonner'

interface ShareButtonProps {
  link?: string
}

export default function ShareButton({ link }: ShareButtonProps) {
  const currentUrl = window.location.href

  const saveCurrentUrl = () => {
    if (link) {
      window.navigator.clipboard
        .writeText(currentUrl + link)
        .then(() => toast('Link copied!'))
    } else {
      window.navigator.clipboard
        .writeText(currentUrl)
        .then(() => toast('Link copied!'))
    }
  }
  return (
    <Button onClick={saveCurrentUrl}>
      <Shared />
      Share
    </Button>
  )
}
