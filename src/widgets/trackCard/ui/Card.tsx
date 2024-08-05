import styled from 'styled-components'
import Download from 'shared/assets/images/download.svg?react'
import Edit from 'shared/assets/images/edit-image.svg?react'
// import { useTrackForm } from 'features/generate/track/model/formCollectDataSlice'
import { useEffect, useState } from 'react'
import { Regenerate } from 'features/regenerate'
import { ImageSlider } from 'features/imageSlider'
import { GenerateReleaseResponse, TrackCover } from 'shared/types/generate'
import { Button } from 'shared/ui/Button'
import { useNavigate } from 'react-router-dom'
import { saveFile } from 'shared/lib/safeFile'
import { CardTitle } from 'shared/ui/card/cardTitle'
import { SaveCover } from 'features/saveCover'
import { useCurrentCover } from '../model/currentCoverSlice'

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
  width: 26rem;
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
  &::-webkit-scrollbar {
    width: 1.5px;
    overflow-x: none;
  }

  &::-webkit-scrollbar-track {
    padding: 0 1rem;
    background-color: #b8c0c22a;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #00acb5a5;
    border-radius: 4px;
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
}: TractCardProps) => {
  // const [currentCoverIndex, setCurrentCoverIndex] = useState(0)
  const [isSaved, setIsSaved] = useState<boolean>(false)

  console.log(covers.some(obj => obj.isSaved))
  const currentCoverIndex = useCurrentCover(state => state.currentCoverId)
  const setCurrentCoverIndex = useCurrentCover(state => state.setCurrentId)

  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const releaseData = {
    title: releaseResponse.title,
    mood: covers[currentCoverIndex]?.mood,
    object: covers[currentCoverIndex]?.object,
    surrounding: covers[currentCoverIndex]?.surrounding,
    coverDescription: covers[currentCoverIndex]?.coverDescription,
    isLoFi: covers[currentCoverIndex]?.isLoFi,
    releaseId: releaseId,
    token: token,
  }

  useEffect(() => {
    if (!isSaved) {
      setIsSaved(covers.some(obj => obj.isSaved))
    }
  }, [covers, isSaved])

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
            position: 'relative',
          }}
        >
          <ImageSlider
            setCurrentCover={setCurrentCoverIndex}
            covers={covers}
            index={currentCoverIndex}
          />
          <div>
            <CardTitle>{releaseResponse.title}</CardTitle>
            <Description>
              <div>
                <h4>Mood</h4>
                <TagWrapper>
                  {covers[currentCoverIndex]?.mood.map((e, index) => (
                    <Tag key={index}>{e}</Tag>
                  ))}
                </TagWrapper>
              </div>

              <div>
                <h4>Object / Action</h4>
                <p>{covers[currentCoverIndex]?.object}</p>
              </div>

              <div>
                <h4>Surrounding</h4>
                <p>{covers[currentCoverIndex]?.surrounding}</p>
              </div>

              <div>
                <h4>Style</h4>
                <TagWrapper>
                  {covers[currentCoverIndex]?.coverDescription.map(
                    (e, index) => <Tag key={index}>{e}</Tag>,
                  )}
                </TagWrapper>
              </div>
            </Description>
          </div>
          {/* <span
            style={{
              position: 'absolute',
              top: '0.5rem',
              left: '0.5rem',
              background: '#ffffff9c',
              height: '1rem',
              width: '1rem',
              borderRadius: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {currentCoverIndex + 1}
          </span> */}
        </div>
        <Bottom>
          <Actions>
            <SaveCover
              type="release"
              releaseId={releaseResponse.id}
              coverId={covers[currentCoverIndex]?.id}
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
                releaseResponse.title.trimEnd().replace(' ', '_'),
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
