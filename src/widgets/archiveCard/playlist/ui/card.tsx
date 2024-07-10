import { DetailedHTMLProps, HTMLAttributes } from 'react'
import s from './styles.module.scss'
import { ArchivePlaylistResponse } from 'shared/types/generate'
import { CardTitle } from 'shared/ui/card/cardTitle'
import cover from 'shared/assets/images/image18.png'

interface ArchivePlaylistCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ArchivePlaylistResponse
  innerRef?: React.Ref<HTMLDivElement>
}
const ArchivePlaylistCard = ({ data, innerRef }: ArchivePlaylistCardProps) => {
  return (
    <div ref={innerRef} className={s.card}>
      <div className={s.main}>
        <img className={s.cover} src={cover} alt="" />

        <div className={s.description}>
          <CardTitle>{data?.title}</CardTitle>
          <div className={s.actions}>
            <ol className={s.playlist}>
              {data?.tracks.map((song, index) => (
                <li key={index}>
                  {`${song.authors} - `}
                  <span>{song.title}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className={s.bottom}></div>
    </div>
  )
}

export default ArchivePlaylistCard
