import { ToasterOnError } from 'entities/ToastOnError'
import { StyledPage } from 'shared/ui/StyledPage'
import { TrackCard } from 'widgets/trackCard'
import { useParams } from 'react-router-dom'
import { TrackCover } from 'shared/types/generate'
import { useEffect, useState } from 'react'
import { useGetRelease } from 'shared/services/releaseQuery'
import { DotsLoader } from 'shared/ui/DotsLoader'

function Page() {
  const [coverImages, setCoverImages] = useState<TrackCover[]>([])
  const { id } = useParams()
  const releaseId = Number(id)

  const {
    data: releaseResponse,
    isPending,
    isSuccess,
    isLoadingError,
  } = useGetRelease(releaseId)

  useEffect(() => {
    if (isSuccess) {
      setCoverImages(releaseResponse.covers)
    }
  }, [isSuccess, releaseResponse])

  return (
    <StyledPage>
      {releaseResponse && (
        <TrackCard
          releaseId={releaseId}
          covers={coverImages}
          releaseResponse={releaseResponse}
        />
      )}
      {isPending && <DotsLoader />}
      {isLoadingError && <h4>Cover not found...</h4>}
      <ToasterOnError />
    </StyledPage>
  )
}

export default Page
