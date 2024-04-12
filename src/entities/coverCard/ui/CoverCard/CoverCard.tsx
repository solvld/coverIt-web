import s from './styles.module.scss'
import CoverImage from './CoverImage'
import CoverDescription from './CoverDescription'
import styled from 'styled-components'

const Card = styled.article<{ $position: { axesX: number; axesY: number } }>`
  transform: ${props =>
    `translate(${props.$position.axesX}rem, ${props.$position.axesY}rem)`};
  @media (max-width: 1376px) {
    transform: translate(0, 0);
  }
`

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
    <Card $position={position} className={s.cardItem}>
      <CoverImage image={image} />
      <CoverDescription title={title} songs={songs} />
    </Card>
  )
}

export default CoverCard
