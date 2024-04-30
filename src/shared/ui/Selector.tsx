import { useState } from 'react'
import styled from 'styled-components'

const SSelector = styled.button<{ isActive?: boolean }>`
  all: unset;
  height: 2rem;
  border-radius: 9px;
  background-color: ${props =>
    props.isActive ? '#00ADB5' : 'rgba(0.133, 0.157, 0.192, 0.05)'};
  color: ${props => props.isActive && '#fff'};
  padding: 2px 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`
export const SelectorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`
interface SelectorProps {
  value: string
}

export const Selector = ({ value }: SelectorProps) => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => setIsActive(prev => !prev)
  return (
    <SSelector
      onClick={handleClick}
      value={value}
      type="button"
      isActive={isActive}
    >
      {value}
    </SSelector>
  )
}
