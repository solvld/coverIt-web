import { useEffect, useState } from 'react'
import styled from 'styled-components'

const SSelector = styled.button<{ $isActive?: boolean }>`
  all: unset;
  cursor: pointer;
  width: fit-content;
  height: 44px;
  padding: 0 25px;
  border-radius: 26px;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  background-color: ${props =>
    props.$isActive ? '#00ADB5' : 'rgba(0.133, 0.157, 0.192, 0.05)'};
  color: ${props => props.$isActive && '#fff'};

  &:hover {
    opacity: 0.9;
  }
`
export const SelectorsWrapper = styled.div`
  display: flex;
  /* min-height: 11.25rem; */
  align-items: center;
  padding: 1rem 0;
  flex-wrap: wrap;
  gap: 0.5rem;
`
export const SelectorsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`
interface SelectorProps {
  value: string
  handleOnClick: () => void
  checked: boolean
}

export const Selector = ({ value, handleOnClick, checked }: SelectorProps) => {
  const [isActive, setIsActive] = useState(checked)
  const handleClick = () => {
    setIsActive(prev => !prev)
    handleOnClick()
  }
  useEffect(() => {
    setIsActive(checked)
  }, [checked])
  return (
    <SSelector
      onClick={handleClick}
      value={value}
      type="button"
      $isActive={isActive}
    >
      {value}
    </SSelector>
  )
}
