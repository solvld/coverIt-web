import styled from 'styled-components'

export const LinkButton = styled.button`
  all: unset;
  font-size: 24px;
  line-height: 26px;
  padding: 15px 25px;
  border-radius: 55px;
  background-color: var(--gray0);
  transition: all 0.4s;
  &:hover {
    background-color: var(--primary-color);
    a {
      color: #fff;
    }
  }
  &:active {
    opacity: 0.7;
  }
`
