import { ToasterOnError } from 'entities/ToastOnError'
import { StyledPage } from 'shared/ui/StyledPage'
import { TrackCard } from 'widgets/trackCard'
import { useParams } from 'react-router-dom'
import { TrackCover } from 'shared/types/generate'
import { useEffect, useState } from 'react'
import { useGetRelease } from 'shared/services/releaseQuery'
import { DotsLoader } from 'shared/ui/DotsLoader'
import { useRegenerateTrack } from 'features/generate/track/api/generateQuery'
import { PopUp } from 'widgets/popup'
import { RemainingGenerates } from 'features/remainingGenerates'
import { errorStatusCheck, playlistErrorHandle } from 'shared/lib/queryError'

function Page() {
  const [isNotification, setIsNotification] = useState(false)
  const [coverImages, setCoverImages] = useState<TrackCover[]>([])
  const [lastIndex, setLastIndex] = useState(0)
  const { id } = useParams()
  const releaseId = Number(id)
  const token = localStorage.getItem('token')
  const getReleaseData = { token: token, releaseId: releaseId }

  const {
    data: releaseResponse,
    isPending,
    isSuccess,
    isLoadingError,
    error,
  } = useGetRelease(getReleaseData)

  const {
    mutate: regenerateRelease,
    isPending: regeneratePending,
    isSuccess: isRegenerateSuccess,
    data: regeneratedCovers,
    isError: isRegenerateError,
    error: regenerateError,
  } = useRegenerateTrack()

  useEffect(() => {
    if (isRegenerateError && errorStatusCheck(regenerateError, '402')) {
      setIsNotification(true)
    }
  }, [isRegenerateError, regenerateError])

  useEffect(() => {
    if (isSuccess) {
      setCoverImages(releaseResponse.covers)
    }
    if (isRegenerateSuccess) {
      setCoverImages(regeneratedCovers.covers)
      setLastIndex(regeneratedCovers.covers.length - 1)
    }
  }, [isSuccess, releaseResponse, isRegenerateSuccess, regeneratedCovers])

  return (
    <StyledPage>
      {releaseResponse && (
        <TrackCard
          releaseId={releaseId}
          covers={coverImages}
          releaseResponse={releaseResponse}
          regenerateCover={regenerateRelease}
          isRegeneratePending={regeneratePending}
          lastIndex={lastIndex}
        />
      )}
      {isPending && <DotsLoader />}
      {isLoadingError && <h4>{`${playlistErrorHandle(error)}...`}</h4>}
      <ToasterOnError />
      {isRegenerateError && (
        <PopUp isActive={isNotification} setIsActive={setIsNotification}>
          <RemainingGenerates type="release" error={regenerateError} />
        </PopUp>
      )}
    </StyledPage>
  )
}

export default Page
