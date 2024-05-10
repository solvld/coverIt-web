import { LinearLoading } from 'entities/LinearLoading'
import { ToasterOnError } from 'entities/ToastOnError'
import { GenerateTrackForm } from 'features/generate'
import { useGenerateTrack } from 'features/generate/track/api/generateQuery'
import { useEffect, useState } from 'react'
import { StyledPage } from 'shared/ui/StyledPage'
import { TrackCard } from 'widgets/trackCard'

const Page = () => {
  const [isCardActive, setIsCardActive] = useState(false)
  const {
    mutate,
    isPending,
    isSuccess,
    data: trackCoverData,
  } = useGenerateTrack()

  useEffect(() => {
    if (isSuccess) {
      setIsCardActive(true)
    }
  }, [isSuccess])

  if (!isCardActive) {
    return (
      <StyledPage>
        {isPending ? (
          <LinearLoading>We are cooking your track...</LinearLoading>
        ) : (
          <GenerateTrackForm generateTrack={mutate} />
        )}
        <ToasterOnError />
      </StyledPage>
    )
  }

  if (isCardActive) {
    return (
      <StyledPage>
        {isSuccess && (
          <TrackCard
            coverLink={trackCoverData?.cover?.link}
            setIsCardActive={setIsCardActive}
          />
        )}
        <ToasterOnError />
      </StyledPage>
    )
  }
  console.log(isCardActive)
}

export default Page
