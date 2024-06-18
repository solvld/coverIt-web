import { LinearLoading } from 'entities/LinearLoading'
import { ToasterOnError } from 'entities/ToastOnError'
import { GenerateTrackForm } from 'features/generate'
import { useEditRelease } from 'features/generate/track/api/generateQuery'
import { RemainingGenerates } from 'features/remainingGenerates'
import { useEffect, useState } from 'react'
import { errorStatusCheck } from 'shared/lib/queryError'
import { StyledPage } from 'shared/ui/StyledPage'
import { PopUp } from 'widgets/popup'

const Page = () => {
  const [isNotification, setIsNotification] = useState(false)
  const [isFormActive, setIsFormActive] = useState(true)
  const { mutate, isPending, isSuccess, isError, error } = useEditRelease()

  useEffect(() => {
    if (isPending) {
      setIsFormActive(false)
    }
    if (isError) {
      setIsFormActive(true)
    }
    if (isError && errorStatusCheck(error, '402')) {
      setIsNotification(true)
    }
  }, [isPending, isError, error])

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
      {isError && (
        <PopUp isActive={isNotification} setIsActive={setIsNotification}>
          <RemainingGenerates type="release" error={error} />
        </PopUp>
      )}
    </StyledPage>
  )
}

export default Page
