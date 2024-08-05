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
import { useCurrentCover } from 'widgets/trackCard/model/currentCoverSlice'

function Page() {
  const [isNotification, setIsNotification] = useState(false)
  const [coverImages, setCoverImages] = useState<TrackCover[]>([])

  const lastIndex = useCurrentCover(state => state.currentCoverId)
  const setLastIndex = useCurrentCover(state => state.setCurrentId)
  console.log(lastIndex)

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
      setLastIndex(releaseResponse.covers.length - 1)
    }
  }, [isSuccess, releaseResponse, setLastIndex])

  useEffect(() => {
    if (isRegenerateSuccess) {
      setCoverImages(regeneratedCovers.covers)
    }
  }, [isRegenerateSuccess, regeneratedCovers])

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
