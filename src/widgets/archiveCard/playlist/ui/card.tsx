import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef } from 'react'
import s from './styles.module.scss'
import { ArchivePlaylistResponse } from 'shared/types/generate'
import { Button } from 'shared/ui/Button'
import Play from 'shared/assets/images/play.svg?react'
// import Like from 'shared/assets/images/likeIcon.svg?react'
import { ShareButton } from 'features/shareButton'

interface ArchivePlaylistCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ArchivePlaylistResponse
  innerRef?: React.Ref<HTMLDivElement>
}
const ArchivePlaylistCard = ({ data, innerRef }: ArchivePlaylistCardProps) => {
  const elementsRef = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    elementsRef.current.forEach(element => {
      if (element && element.offsetWidth > 307) {
        element.classList.add(s.scrollable)
      }
    })
  }, [])
  return (
    <div ref={innerRef} className={s.card}>
      <div className={s.main}>
        <img
          className={s.cover}
          src={data.covers[data.covers.findIndex(cover => cover.isSaved)].link}
          alt={`${data.title} cover`}
        />

        <div className={s.description}>
          <h2 className={s.title}>{data?.title}</h2>
          <div className={s.actions}>
            <ol className={s.playlist}>
              {data?.tracks.map((song, index) => (
                <li key={index} ref={el => (elementsRef.current[index] = el)}>
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
          <h2 className={s.username}>{`@${data.author}`}</h2>
        </div>
        <div>
          <ShareButton link={`/playlist/${data.id}`} />
          {/* <Button>
            <Like />
            Like
          </Button> */}
          <Button>
            <a href={data.url} target="_blank">
              <Play />
              Play
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ArchivePlaylistCard
