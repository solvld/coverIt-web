import { regenerateError } from 'shared/lib/queryError'
import { Title } from 'shared/ui/form'
import styled from 'styled-components'

const SNotification = styled.div`
  background: var(--background-color);
  box-shadow: var(--shadow);
  padding: 1.64rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  min-width: 32rem;
  width: 100%;

  span {
    color: var(--primary-color);
  }
`
interface NotificationProps {
  error: Error
}

export default function Notification({ error }: NotificationProps) {
  return (
    <SNotification>
      {/* <Title>For this playlist you have:</Title>
      <div>
        <p>
          Hi-Fi left: <span>0</span>
        </p>
        <p>
          Lo-Fi left: <span>0</span>
        </p>
      </div> */}
      <Title>{regenerateError(error)}</Title>
    </SNotification>
  )
}
