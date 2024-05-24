import s from './style.module.scss'
import AddCircle from 'shared/assets/images/add-circle.svg?react'
import Regenerate from 'shared/assets/images/regenerate.svg?react'
import Download from 'shared/assets/images/download.svg?react'
import Shared from 'shared/assets/images/shared.svg?react'
import Play from 'shared/assets/images/play.svg?react'
import { Button } from 'shared/ui/Button'
import { ImageSlider } from 'features/imageSlider'
import { GeneratePlaylistResponse } from 'shared/types/generate'
import { Title } from 'shared/ui/form'
import { useState } from 'react'

interface PlaylistCardProps {
  response: GeneratePlaylistResponse
}

export const GeneratedCard = ({ response }: PlaylistCardProps) => {
  const [currentCoverIndex, setCurrentCoverIndex] = useState(0)
  return (
    <section className={s.page}>
      <div className={s.card}>
        <div className={s.main}>
          <ImageSlider
            setCurrentCover={setCurrentCoverIndex}
            covers={response.covers}
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
            <Button>
              <Regenerate />
              Regenerate
            </Button>
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
