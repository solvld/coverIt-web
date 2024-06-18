import { LinearLoading } from 'entities/LinearLoading'
import { ToasterOnError } from 'entities/ToastOnError'
import { GenerateTrackForm } from 'features/generate'
import { useGenerateTrack } from 'features/generate/track/api/generateQuery'
import { RemainingGenerates } from 'features/remainingGenerates'
import { useEffect, useState } from 'react'
import { errorStatusCheck } from 'shared/lib/queryError'
import { StyledPage } from 'shared/ui/StyledPage'
import { PopUp } from 'widgets/popup'

const Page = () => {
  const [isFormActive, setIsFormActive] = useState(true)
  const { mutate, isPending, isSuccess, isError, error } = useGenerateTrack()
  const [isNotification, setIsNotification] = useState(false)

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
        <GenerateTrackForm generateTrack={mutate} />
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
