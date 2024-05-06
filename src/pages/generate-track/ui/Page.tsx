import { LinearLoading } from 'entities/LinearLoading'
import { ToasterOnError } from 'entities/ToastOnError'
import { GenerateTrackForm } from 'features/generate'
import { useGenerateTrack } from 'features/generate/track/api/generateQuery'
import { StyledPage } from 'shared/ui/StyledPage'
import { TrackCard } from 'widgets/trackCard'

const Page = () => {
  const {
    mutate,
    isPending,
    isSuccess,
    data: trackCoverData,
  } = useGenerateTrack()

  // if (isPending) {
  //   return (
  //     <StyledPage>
  //       <LinearLoading>We are cooking your track...</LinearLoading>
  //     </StyledPage>
  //   )
  // }

  if (isSuccess) {
    return (
      <StyledPage>
        <TrackCard coverLink={trackCoverData.cover.link} />
      </StyledPage>
    )
  }

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

export default Page
