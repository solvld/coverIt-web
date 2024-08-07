import { useState } from 'react'
import Like from 'shared/assets/images/likeIcon.svg?react'
import { Button } from 'shared/ui/Button'
import { useLikePlaylist, useUnlikePlaylist } from '../api/likePlaylistQuery'
import { useLogin } from 'features/auth/byEmail'
import { useNavigate } from 'react-router-dom'

interface LikeButtonProps {
  playlistId: number
  liked: boolean
}

export function LikeButton({ liked, playlistId }: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState<boolean>(liked)

  const token = localStorage.getItem('token')
  const isLoggedIn = useLogin(state => state.isLoggedIn)
  const navigate = useNavigate()

  const { mutate: like, isError } = useLikePlaylist()
  const { mutate: unlike } = useUnlikePlaylist()

  const handleClick = () => {
    if (isLoggedIn) {
      if (isLiked) {
        unlike({ token, playlistId })
      } else {
        like({ token, playlistId })
      }
      setIsLiked(!isLiked)
    } else navigate('/sign-in')
  }
  return (
    <div>
      <Button disabled={false} onClick={handleClick}>
        <Like />
        {isLiked && !isError ? 'Liked' : 'Like'}
      </Button>
    </div>
  )
}
