import { ToasterOnError } from 'entities/ToastOnError'
import { StyledPage } from 'shared/ui/StyledPage'
import { TrackCard } from 'widgets/trackCard'
import { covers } from 'shared/mocks/covers'
import { useParams } from 'react-router-dom'

function Page() {
  const { id } = useParams()
  const releaseId = Number(id)

  return (
    <StyledPage>
      <TrackCard releaseId={releaseId} covers={covers} />
      <ToasterOnError />
    </StyledPage>
  )
}

export default Page
