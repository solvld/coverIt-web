import { StyledPage } from 'shared/ui/StyledPage'
import styled from 'styled-components'
import WIP from 'shared/assets/images/wip.svg?react'

const SMessage = styled.div`
  color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 1rem; */
  font-weight: 600;
  font-size: 1.5rem; /* 32px */
  letter-spacing: -0.03em;
  line-height: 1.875rem;

  svg {
    stroke: var(--black);
    width: 5rem;
    margin-top: 2rem;
  }
`

export default function Page() {
  return (
    <StyledPage>
      <SMessage>
        <span>We are working on this feature right now.</span>
        <span>Info will be available here soon!</span>
        <WIP />
      </SMessage>
    </StyledPage>
  )
}
