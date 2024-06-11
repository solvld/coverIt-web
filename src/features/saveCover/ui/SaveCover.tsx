import { Button } from 'shared/ui/Button'
import AddCircle from 'shared/assets/images/add-circle.svg?react'
import Done from 'shared/assets/images/check-square.svg?react'
import styled from 'styled-components'
import { RadioLabel } from 'shared/ui/form'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSavePlaylist, useSaveRelease } from './api/saveCoverQuery'

export const InputCheckbox = styled.input.attrs({ type: 'checkbox' })`
  -webkit-appearance: none;
  appearance: none;
  width: 0.9rem;
  height: 0.9rem;
  margin-right: 0.375rem;
  border: 1.5px solid var(--black);
  border-radius: 3px;
  display: grid;
  place-content: center;

  &::before {
    content: '';
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 3px;
    opacity: 0;
    transition: opacity 120ms ease-in-out;
    background-color: var(--black);
  }

  &:checked::before {
    opacity: 1;
  }
`

interface SaveCoverProps {
  coverId: number
  playlistId?: number
  isSaved?: boolean
  releaseId?: number
  type: 'release' | 'playlist'
}
export default function SaveCover({
  coverId,
  playlistId,
  isSaved,
  releaseId,
  type,
}: SaveCoverProps) {
  const [isPrivate, setIsPrivate] = useState(true)
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const handleChange = () => {
    setIsPrivate(prev => !prev)
  }

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
        <RadioLabel>
          <InputCheckbox
            onChange={handleChange}
            name="check"
            value={isPrivate.toString()}
            checked={!isPrivate}
          />
          Public
        </RadioLabel>
      ) : null}
    </div>
  )
}
