import { ToasterOnError } from 'entities/ToastOnError'
import { StyledPage } from 'shared/ui/StyledPage'
import { TrackCard } from 'widgets/trackCard'
import { useParams } from 'react-router-dom'
import { TrackCover } from 'shared/types/generate'
import { useEffect, useState } from 'react'
import { useGetRelease } from 'shared/services/releaseQuery'
import { DotsLoader } from 'shared/ui/DotsLoader'
import { useRegenerateTrack } from 'features/generate/track/api/generateQuery'

function Page() {
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
  } = useGetRelease(getReleaseData)

  const {
    mutate: regenerateRelease,
    isPending: regeneratePending,
    isSuccess: isRegenerateSuccess,
    data: regeneratedCovers,
  } = useRegenerateTrack()

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
      {isLoadingError && <h4>Cover not found...</h4>}
      <ToasterOnError />
    </StyledPage>
  )
}

export default Page
