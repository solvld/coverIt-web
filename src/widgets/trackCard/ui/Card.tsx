import styled from 'styled-components'
import Reload from 'shared/assets/images/reload.svg?react'
import Download from 'shared/assets/images/download.svg?react'
import Edit from 'shared/assets/images/edit-image.svg?react'
import { useTrackForm } from 'features/generate/track/model/formCollectDataSlice'

const SCard = styled.section`
  max-width: 75rem;
  width: 100%;
  height: 42rem;
  margin-bottom: 2rem;
  border-radius: 9px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template: 1fr 1fr / 32rem 1fr;
  gap: 2rem;
  padding: 4rem 0 2rem 4rem;
`
const Cover = styled.figure`
  width: 32rem;
  height: 32rem;

  img {
    width: 32rem;
    height: 32rem;
  }
`
const TrackTitle = styled.h3`
  font-size: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
`
const Description = styled.div`
  display: flex;
  height: 28.5rem;
  flex-direction: column;
  justify-content: space-between;
  cursor: default;

  h4 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.75rem;
  }
  p {
    font-size: 1.25rem;
  }
`
const Tag = styled.span`
  padding: 4px 10px;
  color: #fff;
  border-radius: 9px;
  background-color: var(--primary-color);
`
const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`
const Actions = styled.div`
  display: flex;
  gap: 2rem;
  svg {
    cursor: pointer;
  }
`

interface TractCardProps {
  coverLink: string
}
const Card = ({ coverLink }: TractCardProps) => {
  const formState = useTrackForm(state => state.formState)
  return (
    <SCard>
      <Cover>
        <img src={coverLink} alt="" />
      </Cover>
      <div>
        <TrackTitle>{formState.title}</TrackTitle>
        <Description>
          <div>
            <h4>Mood</h4>
            <TagWrapper>
              {formState.mood.split(',').map((e, index) => (
                <Tag key={index}>{e}</Tag>
              ))}
            </TagWrapper>
          </div>

          <div>
            <h4>Object / action</h4>
            <p>{formState.object}</p>
          </div>

          <div>
            <h4>Surrounding</h4>
            <p>{formState.surrounding}</p>
          </div>

          <div>
            <h4>Style</h4>
            <TagWrapper>
              {formState.coverDescription.split(',').map((e, index) => (
                <Tag key={index}>{e}</Tag>
              ))}
            </TagWrapper>
          </div>
        </Description>
      </div>

      <Actions>
        <Reload style={{ stroke: 'var(--primary-color)' }} />

        <Edit />

        <a href={coverLink} download={`Cover.png`}>
          <Download />
        </a>
      </Actions>
    </SCard>
  )
}

export default Card
