import { ToasterOnError } from 'entities/ToastOnError'
import { playlistResMock } from 'shared/mocks/covers'
import { StyledPage } from 'shared/ui/StyledPage'
import { GeneratedCard } from 'widgets/generated-card/ui/Card'

function Page() {
  return (
    <StyledPage>
      <GeneratedCard response={playlistResMock} />
      <ToasterOnError />
    </StyledPage>
  )
}

export default Page
