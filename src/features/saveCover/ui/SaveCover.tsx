import { Button } from 'shared/ui/Button'
import AddCircle from 'shared/assets/images/add-circle.svg?react'
import Done from 'shared/assets/images/check-square.svg?react'
import { VerticalBar } from 'shared/ui/form'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSavePlaylist, useSaveRelease } from './api/saveCoverQuery'
import { SaveLabel, SaveOptions, SaveRadio } from './SaveOptions'

interface SaveCoverProps {
  coverId: number
  playlistId?: number
  isSaved?: boolean
  setIsSaved?(input: boolean): void
  releaseId?: number
  type: 'release' | 'playlist'
}
export default function SaveCover({
  coverId,
  playlistId,
  isSaved,
  setIsSaved,
  releaseId,
  type,
}: SaveCoverProps) {
  const [isPrivate, setIsPrivate] = useState(true)
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  const { isSuccess: isSuccessPlaylist, mutate: savePlaylist } =
    useSavePlaylist()
  const { isSuccess: isSuccessRelease, mutate: saveRelease } = useSaveRelease()

  const handleSave = () => {
    if (token) {
      if (playlistId) {
        savePlaylist({ coverId, playlistId, isPrivate, token })
      } else if (releaseId) {
        saveRelease({ coverId, releaseId, token })
      }
      if (setIsSaved) {
        setIsSaved(true)
      }
    } else {
      navigate('/sign-in')
    }
  }

  const coverSaved = isSaved || isSuccessPlaylist || isSuccessRelease

  return (
    <div style={coverSaved ? { opacity: 0.5, pointerEvents: 'none' } : {}}>
      <Button onClick={handleSave}>
        {coverSaved ? <Done /> : <AddCircle />}
        {coverSaved ? 'Saved' : 'Save'}
      </Button>
      {type === 'playlist' ? (
        <SaveOptions>
          <SaveLabel>
            <SaveRadio
              onChange={() => setIsPrivate(false)}
              name="check"
              value={(!isPrivate).toString()}
            />
            Public
          </SaveLabel>
          <VerticalBar
            style={{
              background: 'var(--black)',
              width: 1,
              height: '1.5rem',
              margin: '0 0.4rem 0 0.75rem',
            }}
          />
          <SaveLabel>
            <SaveRadio
              onChange={() => setIsPrivate(true)}
              name="check"
              value={isPrivate.toString()}
            />
            Private
          </SaveLabel>
        </SaveOptions>
      ) : null}
    </div>
  )
}
