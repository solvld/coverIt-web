import { GeneratePlaylistForm } from 'features/generate/playlist'
import { StyledPage } from 'shared/ui/StyledPage'

import { LinearLoading } from 'entities/LinearLoading'
import { ToasterOnError } from 'entities/ToastOnError'
import { useEffect, useState } from 'react'
import { useGeneratePlaylist } from 'features/generate/playlist/api/generateQuery'

const Page = () => {
  const [isFormActive, setIsFormActive] = useState(true)
  const { mutate, isPending, isSuccess, isError } = useGeneratePlaylist()

  useEffect(() => {
    if (isPending) {
      setIsFormActive(false)
    }
    if (isError) {
      setIsFormActive(true)
    }
  }, [isPending, isError])

  return (
    <StyledPage>
      {isFormActive ? (
        <GeneratePlaylistForm generateCover={mutate} />
      ) : (
        <LinearLoading isDone={isSuccess}>
          We are cooking your cover...
        </LinearLoading>
      )}
      <ToasterOnError />
    </StyledPage>
  )
}

export default Page
