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
  type: 'playlist' | 'release'
}

export default function Notification({ error, type }: NotificationProps) {
  return (
    <SNotification>
      <Title>{`For this ${type} you have:`}</Title>
      <div>
        <p>
          Hi-Fi left: <span>{regenerateError(error)?.hiFiLeft}</span>
        </p>
        <p>
          Lo-Fi left: <span>{regenerateError(error)?.loFiLeft}</span>
        </p>
      </div>
      {type === 'release' && (
        <p>{`Limits will renew in ${regenerateError(error)?.hoursLeft} hours ${regenerateError(error)?.minutesLeft} minutes`}</p>
      )}
    </SNotification>
  )
}
