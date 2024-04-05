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
  position: { axesX: number; axesY: number }
}) => {
  return (
    <article
      style={{
        transform: `translate(${position.axesX}rem, ${position.axesY}rem)`,
      }}
      className={s.cardItem}
    >
      <CoverImage image={image} />
      <CoverDescription title={title} songs={songs} />
    </article>
  )
}

export default CoverCard
