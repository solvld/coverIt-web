import GeneratePlaylistForm from 'features/generate/playlist'
import { StyledPage } from 'shared/ui/StyledPage'

import { LinearLoading } from 'entities/LinearLoading'
import { ToasterOnError } from 'entities/ToastOnError'
import { useEffect, useState } from 'react'
import { GeneratedCard } from 'widgets/generated-card/ui/Card'
import { useGeneratePlaylist } from 'features/generate/playlist/api/generateQuery'

const Page = () => {
  const [isCardActive, setIsCardActive] = useState(false)
  const {
    mutate,
    isPending,
    isSuccess,
    data: playlistCoverData,
  } = useGeneratePlaylist()

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
          <GeneratePlaylistForm generateCover={mutate} />
        )}
        <ToasterOnError />
      </StyledPage>
    )
  }

  if (isCardActive) {
    return (
      <StyledPage>
        {isSuccess && <GeneratedCard response={playlistCoverData} />}
        <ToasterOnError />
      </StyledPage>
    )
  }
  console.log(isCardActive)
}

export default Page
