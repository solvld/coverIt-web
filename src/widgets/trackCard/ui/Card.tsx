import styled from 'styled-components'
import Download from 'shared/assets/images/download.svg?react'
import Edit from 'shared/assets/images/edit-image.svg?react'
import AddCircle from 'shared/assets/images/add-circle.svg?react'
import { useTrackForm } from 'features/generate/track/model/formCollectDataSlice'
import { useEffect, useState } from 'react'
import { useRegenerateTrack } from 'features/generate/track/api/generateQuery'
import { Regenerate } from 'features/regenerate'
import { ImageSlider } from 'features/imageSlider'
import { TrackCover } from 'shared/types/generate'
import { Button } from 'shared/ui/Button'
import { Link } from 'react-router-dom'
import { saveFile } from 'shared/lib/safeFile'
import { CardTitle } from 'shared/ui/card/cardTitle'

const SCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  max-width: 56rem;
  width: 100%;
  gap: 1.5rem;
  padding: 1.65rem;
  border-radius: 0.75rem;
  box-shadow: var(--shadow);
  img {
    width: 26.5rem;
    height: 26.5rem;
  }
  .slider {
    width: 26.5rem;
    height: 26.5rem;
  }
`
const Description = styled.div`
  margin-top: 1.5rem;
  display: flex;
  height: 20rem;
  flex-direction: column;
  justify-content: space-between;
  cursor: default;
  min-width: 25rem;
  width: 100%;

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
  align-items: center;
  gap: 0.5rem;
`
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

interface TractCardProps {
  covers: TrackCover[]
  releaseId: number
  setIsCardActive?: (arg: boolean) => void
}
const Card = ({ covers, releaseId }: TractCardProps) => {
  const [coverImages, setCoverImages] = useState(covers)
  const [currentCoverIndex, setCurrentCoverIndex] = useState(0)

  const { title, mood, object, surrounding, coverDescription, isLoFi } =
    useTrackForm(state => state.formState)

  const {
    mutate: regenerateTrack,
    isPending,
    isSuccess,
    data: newTrackImage,
  } = useRegenerateTrack()

  useEffect(() => {
    if (isSuccess) {
      setCoverImages(newTrackImage?.covers)
    }
  }, [isSuccess, newTrackImage])

  const handleRegenerate = () => {
    regenerateTrack({
      title: title,
      mood: mood.split(','),
      object: object,
      surrounding: surrounding,
      coverDescription: coverDescription.split(','),
      isLoFi: isLoFi === 'true',
      releaseId: releaseId,
    })
  }

  return (
    <section>
      <SCard>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '31px',
          }}
        >
          <ImageSlider setCurrentCover={setCurrentCoverIndex} covers={covers} />
          <div>
            <CardTitle>{title}</CardTitle>
            <Description>
              <div>
                <h4>Mood</h4>
                <TagWrapper>
                  {mood.split(',').map((e, index) => (
                    <Tag key={index}>{e}</Tag>
                  ))}
                </TagWrapper>
              </div>

              <div>
                <h4>Object / action</h4>
                <p>{object}</p>
              </div>

              <div>
                <h4>Surrounding</h4>
                <p>{surrounding}</p>
              </div>

              <div>
                <h4>Style</h4>
                <TagWrapper>
                  {coverDescription.split(',').map((e, index) => (
                    <Tag key={index}>{e}</Tag>
                  ))}
                </TagWrapper>
              </div>
            </Description>
          </div>
        </div>
        <Bottom>
          <Actions>
            <Button>
              <AddCircle />
              Save
            </Button>

            <Regenerate onClick={handleRegenerate} isRotate={isPending} />

            <Button>
              <Link to={'/generate/release'}>
                <Edit />
                Edit
              </Link>
            </Button>
          </Actions>

          <Button
            onClick={() =>
              saveFile(
                coverImages[currentCoverIndex]?.link,
                title.trimEnd().replace(' ', '_'),
              )
            }
          >
            <Download />
            Download
          </Button>
        </Bottom>
      </SCard>
    </section>
  )
}

export default Card
