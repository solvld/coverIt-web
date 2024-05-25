import styled, { keyframes } from 'styled-components'
const loading = keyframes`
  0%  {box-shadow: 20px 0 #00ADB5, -20px 0 #00ADB520;background: #00ADB5 }
  33% {box-shadow: 20px 0 #00ADB5, -20px 0 #00ADB520;background: #00ADB520}
  66% {box-shadow: 20px 0 #00ADB520,-20px 0 #00ADB5; background: #00ADB520}
  100%{box-shadow: 20px 0 #00ADB520,-20px 0 #00ADB5; background: #00ADB5 }
  
`

export const DotsLoader = styled.div`
  width: 15px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: ${loading} 1s infinite linear alternate;
`
