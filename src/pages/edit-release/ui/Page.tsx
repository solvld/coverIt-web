import { LinearLoading } from 'entities/LinearLoading'
import { ToasterOnError } from 'entities/ToastOnError'
import { GenerateTrackForm } from 'features/generate'
import { useEditRelease } from 'features/generate/track/api/generateQuery'
import { RemainingGenerates } from 'features/remainingGenerates'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { errorStatusCheck } from 'shared/lib/queryError'
import { useGetRelease } from 'shared/services/releaseQuery'
import { GenerateReleaseResponse } from 'shared/types/generate'
import { StyledPage } from 'shared/ui/StyledPage'
import { PopUp } from 'widgets/popup'

const Page = () => {
  const [isNotification, setIsNotification] = useState(false)
  const [isFormActive, setIsFormActive] = useState(true)
  const [formData, setFormData] = useState<GenerateReleaseResponse | null>(null)
  const [searchParams] = useSearchParams('id')

  const id = searchParams.get('id') || ''
  const releaseId = Number(id)
  const token = localStorage.getItem('token')
  const getReleaseData = { token, releaseId }

  const { data: releaseResponse } = useGetRelease(getReleaseData)
  const { mutate, isPending, isSuccess, isError, error } = useEditRelease()

  useEffect(() => {
    if (releaseResponse) {
      setFormData(releaseResponse)
    }
  }, [releaseResponse])

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
        <GenerateTrackForm
          regenerateTrack={mutate}
          type="edit"
          data={releaseResponse ? formData : null}
        />
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
