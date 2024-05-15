import styled, { keyframes } from 'styled-components'

const load = keyframes`
  0% {
    width: 0;
    background: var(--primary-color);
  }
  25% {
    width: 40%;
    background: var(--primary-color);
  }
  50% {
    width: 60%;
    background: var(--primary-color);
  }
  75% {
    width: 75%;
    background: var(--primary-color);
  }
  100% {
    width: 100%;
    background: var(--primary-color);
  }
`

const Container = styled.div`
  position: relative;
  display: flex;
  width: 41.25rem;
  align-content: center;
  justify-content: center;
  padding: 37px 40px;
  border-radius: 9px;
  box-sizing: border-box;
  background: #fff;
  box-shadow:
    inset 0 4px 1px 0 rgba(0, 0, 0, 0.03),
    0 4px 4px 0 rgba(0, 0, 0, 0.25);
`

const Loading = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 1rem;
  background: var(--gray1);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  overflow: hidden;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 0;
    height: 100%;
    border-radius: 15px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    animation: ${load} 5s infinite;
  }
`

export { Container, Loading }
