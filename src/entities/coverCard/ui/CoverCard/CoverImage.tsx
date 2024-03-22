import s from './styles.module.scss'

const CoverImage = ({ image }: { image: string }) => {
  return (
    <figure className={s.image}>
      <img src={image} alt="" />
    </figure>
  )
}

export default CoverImage
