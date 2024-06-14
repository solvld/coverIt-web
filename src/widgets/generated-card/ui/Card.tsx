import s from './style.module.scss'
import Download from 'shared/assets/images/download.svg?react'
import Play from 'shared/assets/images/play.svg?react'
import { Button } from 'shared/ui/Button'
import { ImageSlider } from 'features/imageSlider'
import { GeneratePlaylistResponse, PlaylistCover } from 'shared/types/generate'
import { useState } from 'react'
import { Regenerate } from 'features/regenerate'
import { saveFile } from 'shared/lib/safeFile'
import { SaveCover } from 'features/saveCover'
import { CardTitle } from 'shared/ui/card/cardTitle'

interface PlaylistCardProps {
  response: GeneratePlaylistResponse
  coverImages: PlaylistCover[]
  setPopupActive?(state: boolean): void
  isPending?: boolean
  lastIndex: number
}

export const GeneratedCard = ({
  response,
  coverImages,
  setPopupActive,
  isPending = false,
  lastIndex,
}: PlaylistCardProps) => {
  const [currentCoverIndex, setCurrentCoverIndex] = useState(lastIndex)
  const [isSaved, setIsSaved] = useState<boolean>(response.isSaved)
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
            index={lastIndex}
          />
          <div>
            <CardTitle>{response?.title}</CardTitle>
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
            <Regenerate
              onClick={handleRegenerate}
              isRotate={isPending}
              disabled={isSaved}
            />
            <SaveCover
              type="playlist"
              playlistId={response.id}
              coverId={coverImages[currentCoverIndex]?.id}
              isSaved={isSaved}
              setIsSaved={setIsSaved}
            />
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
