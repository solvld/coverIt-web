import { LinearLoading } from 'entities/LinearLoading'
import { ToasterOnError } from 'entities/ToastOnError'
import { GenerateTrackForm } from 'features/generate'
import { useEditRelease } from 'features/generate/track/api/generateQuery'
import { useEffect, useState } from 'react'
import { StyledPage } from 'shared/ui/StyledPage'

const Page = () => {
  const [isFormActive, setIsFormActive] = useState(true)
  const { mutate, isPending, isSuccess, isError } = useEditRelease()

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
        <GenerateTrackForm regenerateTrack={mutate} type="edit" />
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
