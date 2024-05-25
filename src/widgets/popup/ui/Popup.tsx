import React, { DetailedHTMLProps, HtmlHTMLAttributes } from 'react'
import styled from 'styled-components'

interface PopUpProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode
  isActive: boolean
  setIsActive(b: boolean): void
}

const SPopUp = styled.div<{ $IsActive: boolean }>`
  z-index: 10;
  position: fixed;
  top: 6.875rem;
  left: 0;
  height: calc(100vh - 6.875rem);
  width: 100vw;
  /* backdrop-filter: blur(5px); */
  background-color: rgba(255, 255, 255, 75%);

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: ${props => (props.$IsActive ? 1 : 0)};
  transition: all 500ms;
  pointer-events: ${props => (props.$IsActive ? 'visible' : 'none')};
`

export default function PopUp({
  isActive,
  setIsActive,
  children,
  ...props
}: PopUpProps) {
  return (
    <SPopUp $IsActive={isActive} {...props} onClick={() => setIsActive(false)}>
      <div
        style={{ marginTop: '-6.875rem' }}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </SPopUp>
  )
}
