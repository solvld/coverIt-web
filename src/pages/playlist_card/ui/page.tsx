import { playlistResMock } from 'shared/mocks/covers'
import { StyledPage } from 'shared/ui/StyledPage'
import { GeneratedCard } from 'widgets/generated-card/ui/Card'

function Page() {
  return (
    <StyledPage>
      <GeneratedCard response={playlistResMock} />
    </StyledPage>
  )
}

export default Page
