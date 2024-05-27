import { ToasterOnError } from 'entities/ToastOnError'
import { RegeneratePlaylistForm } from 'features/generate/playlist'
import { useRegeneratePlaylist } from 'features/generate/playlist/api/generateQuery'
import { useEffect, useState } from 'react'
import { playlistResMock } from 'shared/mocks/covers'
import { StyledPage } from 'shared/ui/StyledPage'
import { GeneratedCard } from 'widgets/generated-card/ui/Card'
import { PopUp } from 'widgets/popup'

function Page() {
  const [isPopUpActive, setIsPopupActive] = useState(false)
  const [coverImages, setCoverImages] = useState(playlistResMock.covers)

  const {
    mutate: regeneratePlaylist,
    isPending,
    isSuccess,
    data: regeneratedCovers,
  } = useRegeneratePlaylist()

  useEffect(() => {
    if (isSuccess) {
      setCoverImages(regeneratedCovers.covers)
    }
  }, [isSuccess, regeneratedCovers])

  return (
    <StyledPage>
      <GeneratedCard
        response={playlistResMock}
        coverImages={coverImages}
        setPopupActive={setIsPopupActive}
        isPending={isPending}
      />
      <PopUp isActive={isPopUpActive} setIsActive={setIsPopupActive}>
        <RegeneratePlaylistForm
          setPopupActive={setIsPopupActive}
          regenerateCover={regeneratePlaylist}
        />
      </PopUp>
      <ToasterOnError />
    </StyledPage>
  )
}

export default Page
