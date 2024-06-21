import styled from 'styled-components'
import Download from 'shared/assets/images/download.svg?react'
import Edit from 'shared/assets/images/edit-image.svg?react'
import { useTrackForm } from 'features/generate/track/model/formCollectDataSlice'
import { useState } from 'react'
import { Regenerate } from 'features/regenerate'
import { ImageSlider } from 'features/imageSlider'
import { GenerateReleaseResponse, TrackCover } from 'shared/types/generate'
import { Button } from 'shared/ui/Button'
import { useNavigate } from 'react-router-dom'
import { saveFile } from 'shared/lib/safeFile'
import { CardTitle } from 'shared/ui/card/cardTitle'
import { SaveCover } from 'features/saveCover'

const SCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  max-width: 56.5rem;
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
  height: 23.125rem;
  flex-direction: column;
  /* justify-content: space-between; */
  cursor: default;
  min-width: 25rem;
  gap: 0.95rem;
  overflow-y: scroll;

  h4 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.7rem;
    letter-spacing: -0.03em;
  }
  p {
    font-size: 0.9rem;
    max-width: 23.5rem;
    line-height: 160%;
  }
`
const Tag = styled.span`
  padding: 0.3rem 1.2rem;
  color: var(--gray0);
  border-radius: 1.3rem;
  background-color: var(--primary-color);
  font-size: 0.9rem;
`
const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 0.4rem;
  column-gap: 0.4rem;
  width: 100%;
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
  releaseResponse: GenerateReleaseResponse
  regenerateCover(data: {
    title: string
    mood: string[]
    object: string
    surrounding: string
    coverDescription: string[]
    isLoFi: boolean
    releaseId: number
  }): void
  isRegeneratePending: boolean
  lastIndex: number
}
const Card = ({
  covers,
  releaseId,
  releaseResponse,
  regenerateCover,
  isRegeneratePending,
  lastIndex,
}: TractCardProps) => {
  const [currentCoverIndex, setCurrentCoverIndex] = useState(0)
  const [isSaved, setIsSaved] = useState<boolean>(
    covers.some(obj => obj.isSaved === true),
  )

  const { title, mood, object, surrounding, coverDescription, isLoFi } =
    useTrackForm(state => state.formState)
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const releaseData = {
    title: title,
    mood: mood.split(','),
    object: object,
    surrounding: surrounding,
    coverDescription: coverDescription.split(','),
    isLoFi: isLoFi === 'true',
    releaseId: releaseId,
    token: token,
  }

  const handleRegenerate = () => {
    regenerateCover(releaseData)
  }

  return (
    <section>
      <SCard>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1.4rem',
          }}
        >
          <ImageSlider
            setCurrentCover={setCurrentCoverIndex}
            covers={covers}
            index={lastIndex}
          />
          <div>
            <CardTitle>{releaseResponse.title}</CardTitle>
            <Description>
              <div>
                <h4>Mood</h4>
                <TagWrapper>
                  {releaseResponse.mood.map((e, index) => (
                    <Tag key={index}>{e}</Tag>
                  ))}
                </TagWrapper>
              </div>

              <div>
                <h4>Object / Action</h4>
                <p>{releaseResponse.object}</p>
              </div>

              <div>
                <h4>Surrounding</h4>
                <p>{releaseResponse.surrounding}</p>
              </div>

              <div>
                <h4>Style</h4>
                <TagWrapper>
                  {releaseResponse.coverDescription.map((e, index) => (
                    <Tag key={index}>{e}</Tag>
                  ))}
                </TagWrapper>
              </div>
            </Description>
          </div>
        </div>
        <Bottom>
          <Actions>
            <SaveCover
              type="release"
              releaseId={releaseResponse.id}
              coverId={releaseResponse.covers[currentCoverIndex]?.id}
              isSaved={isSaved}
              setIsSaved={setIsSaved}
            />

            <Regenerate
              onClick={handleRegenerate}
              isRotate={isRegeneratePending}
              disabled={isSaved}
            />

            <Button
              style={isSaved ? { opacity: 0.5, pointerEvents: 'none' } : {}}
              onClick={() => navigate(`/generate/release/edit?id=${releaseId}`)}
            >
              <Edit />
              Edit
            </Button>
          </Actions>

          <Button
            onClick={() =>
              saveFile(
                covers[currentCoverIndex]?.link,
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
