import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Letter from 'shared/assets/images/letter.svg?react'
import Decline from 'shared/assets/images/check-cross.svg?react'
import Done from 'shared/assets/images/check-square.svg?react'
import { Button } from 'shared/ui/Button'

const SNotification = styled.div`
  background: var(--background-color);
  box-shadow: var(--shadow);
  padding: 1.64rem;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.5rem;

  svg {
    width: 3.25rem;
    height: 3.25rem;
  }
`
const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.125rem;
`
const Notification = ({ status }: { status: string }) => {
  if (status === 'fail') {
    return (
      <SNotification>
        <FlexRow>
          <Decline />
          <span>
            Sorry, we could not verify account. It maybe already
            <br /> verified, or verification code is incorrect.
          </span>
        </FlexRow>
      </SNotification>
    )
  }

  if (status === 'success') {
    return (
      <SNotification>
        <FlexRow>
          <Done />
          <span>You have signed up successfully.</span>
        </FlexRow>
        <Button>
          <Link to={'/sign-in'}>Login</Link>
        </Button>
      </SNotification>
    )
  }

  return (
    <SNotification>
      <FlexRow>
        <Letter />
        <span>
          We have sent confirmation link to your email.
          <br /> If you don't see the email, check your spam folder.
        </span>
      </FlexRow>
    </SNotification>
  )
}

export default Notification
