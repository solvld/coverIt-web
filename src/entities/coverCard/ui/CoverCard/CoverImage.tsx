import { CoverCardImage } from './styles/CoverCard.styles.ts'

const CoverImage = ({ image }: { image: string }) => {
  return (
    <CoverCardImage>
      <img src={image} alt="" />
    </CoverCardImage>
  )
}

export default CoverImage
