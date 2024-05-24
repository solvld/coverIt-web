import s from './style.module.scss'
import AddCircle from 'shared/assets/images/add-circle.svg?react'
import Download from 'shared/assets/images/download.svg?react'
import Shared from 'shared/assets/images/shared.svg?react'
import Play from 'shared/assets/images/play.svg?react'
import { Button } from 'shared/ui/Button'
import { ImageSlider } from 'features/imageSlider'
import { GeneratePlaylistResponse } from 'shared/types/generate'
import { Title } from 'shared/ui/form'
import { useEffect, useState } from 'react'
import { Regenerate } from 'features/regenerate'
import { useRegeneratePlaylist } from 'features/generate/playlist/api/generateQuery'

interface PlaylistCardProps {
  response: GeneratePlaylistResponse
}

export const GeneratedCard = ({ response }: PlaylistCardProps) => {
  const [currentCoverIndex, setCurrentCoverIndex] = useState(0)
  const [coverImages, setCoverImages] = useState(response.covers)

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

  const handleRegenerate = () => {
    regeneratePlaylist({
      playlistId: response.id,
      isAbstract: true,
      isLoFi: true,
      vibe: { label: 'label', value: 'DANCING_FLOOR' },
    })
  }

  return (
    <section className={s.page}>
      <div className={s.card}>
        <div className={s.main}>
          <ImageSlider
            setCurrentCover={setCurrentCoverIndex}
            covers={coverImages}
          />
          <div>
            <Title>{response?.title}</Title>
            <div className={s.actions}>
              <ol className={s.playlist}>
                {response?.tracks.map((song, index) => (
                  <li key={index}>
                    {`${song.authors} - `}
                    <span>{song.title}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <div className={s.bottom}>
          <div>
            <Button>
              <AddCircle />
              Save
            </Button>
            <Regenerate onClick={handleRegenerate} isRotate={isPending} />
          </div>
          <div>
            <Button>
              <a
                href={response.covers[currentCoverIndex].link}
                download={`${response.title}_${currentCoverIndex}.jpeg`}
              >
                <Download />
                Download
              </a>
            </Button>
            <Button>
              <Shared />
              Share
            </Button>
            <Button>
              <a href={response.url} target="_blank">
                <Play />
                Play
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
