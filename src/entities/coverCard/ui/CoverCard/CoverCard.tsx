import s from './styles.module.scss'
import CoverImage from './CoverImage'
import CoverDescription from './CoverDescription'

const CoverCard = ({
  title,
  image,
  songs,
  position,
}: {
  title: string
  image: string
  songs: string[]
  index: number
  position: { top: number; left: number }
}) => {
  return (
    <article
      style={{ top: position.top, left: position.left }}
      className={s.cardItem}
    >
      <CoverImage image={image} />
      <CoverDescription title={title} songs={songs} />
    </article>
  )
}

export default CoverCard
