import s from './style.module.scss'
import AddCircle from 'shared/assets/images/add-circle.svg?react'
import Download from 'shared/assets/images/download.svg?react'
import Play from 'shared/assets/images/play.svg?react'
import { Button } from 'shared/ui/Button'
import { ImageSlider } from 'features/imageSlider'
import { GeneratePlaylistResponse, PlaylistCover } from 'shared/types/generate'
import { Title } from 'shared/ui/form'
import { useState } from 'react'
import { Regenerate } from 'features/regenerate'
import { ShareButton } from 'features/shareButton'
import { saveFile } from 'shared/lib/safeFile'

interface PlaylistCardProps {
  response: GeneratePlaylistResponse
  coverImages: PlaylistCover[]
  setPopupActive?(state: boolean): void
  isPending?: boolean
}

export const GeneratedCard = ({
  response,
  coverImages,
  setPopupActive,
  isPending = false,
}: PlaylistCardProps) => {
  const [currentCoverIndex, setCurrentCoverIndex] = useState(0)
  const handleRegenerate = () => {
    if (setPopupActive) {
      setPopupActive(true)
    }
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
            <Button
              onClick={() =>
                saveFile(
                  coverImages[currentCoverIndex]?.link,
                  response.title.trimEnd().replace(' ', '_'),
                )
              }
            >
              <Download />
              Download
            </Button>

            <ShareButton />

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
