import { HTMLAttributes, useEffect, useState } from 'react'
import { Covers } from 'shared/types/generate'
import styled from 'styled-components'

interface ImageSliderProps extends HTMLAttributes<HTMLElement> {
  covers: Covers
  setCurrentCover?(index: number): void
}

const Slider = styled.div`
  width: 24rem;
  height: 24rem;
  position: relative;
`
const Slide = styled.img`
  width: 24rem;
  height: 24rem;
  border-radius: 0.5rem;
`
const RightButton = styled.button`
  all: unset;
  position: absolute;
  top: 50%;
  /* transform: translate(0, -50%); */
  right: 0.5rem;
  font-size: 60px;
  opacity: 0.1;
  cursor: pointer;
  scale: 0.6;
  transition: all 0.4s;
  &:hover {
    opacity: 0.3;
    scale: 1;
  }
`
const LeftButton = styled.button`
  all: unset;
  position: absolute;
  top: 50%;
  left: 0.5rem;
  font-size: 60px;
  opacity: 0.1;
  cursor: pointer;
  scale: 0.6;
  transition: all 0.4s;
  &:hover {
    opacity: 0.3;
    scale: 1;
  }
`

const ImageSlider = ({ covers, setCurrentCover }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isButtonHide, setIsButtonHide] = useState(true)

  useEffect(() => {
    if (covers.length > 1) {
      setIsButtonHide(false)
    }
  }, [covers])

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? covers.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    if (setCurrentCover) {
      setCurrentCover(newIndex)
    }
  }
  const goToNext = () => {
    const isLastSlide = currentIndex === covers.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    if (setCurrentCover) {
      setCurrentCover(newIndex)
    }
  }

  return (
    <Slider>
      {!isButtonHide && <LeftButton onClick={goToPrevious}>❰</LeftButton>}
      {!isButtonHide && <RightButton onClick={goToNext}>❱</RightButton>}
      <Slide src={covers[currentIndex]?.link} alt="cover" />
    </Slider>
  )
}

export default ImageSlider
