import { ToasterOnError } from 'entities/ToastOnError'
import { RegeneratePlaylistForm } from 'features/generate/playlist'
import { useRegeneratePlaylist } from 'features/generate/playlist/api/generateQuery'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { playlistErrorHandle } from 'shared/lib/queryError'
import { useGetPlaylist } from 'shared/services/playlistQuery'
import { PlaylistCover } from 'shared/types/generate'
import { DotsLoader } from 'shared/ui/DotsLoader'
import { StyledPage } from 'shared/ui/StyledPage'
import { GeneratedCard } from 'widgets/generated-card/ui/Card'
import { PopUp } from 'widgets/popup'

function Page() {
  const [isPopUpActive, setIsPopupActive] = useState(false)
  const [coverImages, setCoverImages] = useState<PlaylistCover[]>([])

  const { id } = useParams()

  const {
    data: playlistResponse,
    isPending,
    isSuccess: isSuccessPlaylist,
    isLoadingError,
    error,
  } = useGetPlaylist(Number(id))

  const {
    mutate: regeneratePlaylist,
    isPending: regeneratePending,
    isSuccess,
    data: regeneratedCovers,
  } = useRegeneratePlaylist()

  useEffect(() => {
    if (isSuccessPlaylist) {
      setCoverImages(playlistResponse.covers)
    }
    if (isSuccess) {
      setCoverImages(regeneratedCovers.covers)
    }
  }, [isSuccess, regeneratedCovers, isSuccessPlaylist, playlistResponse])

  return (
    <StyledPage>
      {playlistResponse && (
        <GeneratedCard
          response={playlistResponse}
          coverImages={coverImages}
          setPopupActive={setIsPopupActive}
          isPending={regeneratePending}
        />
      )}
      {isPending && <DotsLoader />}
      <PopUp isActive={isPopUpActive} setIsActive={setIsPopupActive}>
        <RegeneratePlaylistForm
          setPopupActive={setIsPopupActive}
          regenerateCover={regeneratePlaylist}
        />
      </PopUp>
      {isLoadingError && <h4>{`${playlistErrorHandle(error)}...`}</h4>}
      <ToasterOnError />
    </StyledPage>
  )
}

export default Page
