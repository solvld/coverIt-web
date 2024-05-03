import styled from 'styled-components'
import arrowDown from '../assets/images/arrowDown.svg'

export const Select = styled.select<{ $maxWidth?: string }>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  display: block;
  font-size: 16px;
  font-family: inherit;
  font-weight: 500;
  color: rgba(34, 40, 49, 0.87);
  line-height: 1.5;
  padding: 0.6em 0.2em;
  box-sizing: border-box;
  width: 100%;
  max-width: ${props => props.$maxWidth || '6rem'};
  margin: 0;
  border: none;
  border-bottom: 1px solid;

  background-image: url(${arrowDown});
  background-repeat: no-repeat;
  background-position: right 0.2em top 50%;

  &::-webkit-scrollbar {
    border-radius: 0;
  }

  &:focus {
    outline: none;
  }
`
