import s from './styles.module.scss'
import CoverImage from './CoverImage'
import CoverDescription from './CoverDescription'

const CoverCard = ({
  title,
  image,
  songs,
}: {
  title: string
  image: string
  songs: string[]
}) => {
  return (
    <article className={s.cardItem}>
      <CoverImage image={image} />
      <CoverDescription title={title} songs={songs} />
    </article>
  )
}

export default CoverCard
