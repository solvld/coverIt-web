import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Letter from 'shared/assets/images/letter.svg?react'
import Decline from 'shared/assets/images/check-cross.svg?react'
import Done from 'shared/assets/images/check-square.svg?react'

const SNotification = styled.div`
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.135);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 0.5rem;
  font-weight: 400;
  font-size: 1.25rem;
  a {
    text-decoration: underline;
    color: var(--primary-color);
    margin-top: 0.25rem;
    &:hover {
      color: #02929a;
    }
  }
  div {
    display: flex;
    flex-direction: column;
  }
`

const Notification = ({ status }: { status: string }) => {
  if (status === 'fail') {
    return (
      <SNotification>
        <Decline />
        <span>
          Sorry, we could not verify account. It maybe already
          <br /> verified, or verification code is incorrect.
        </span>
      </SNotification>
    )
  }

  if (status === 'success') {
    return (
      <SNotification>
        <Done />
        <div>
          <span>You have signed up successfully.</span>
          <Link to={'/sign-in'}>Click here to login</Link>
        </div>
      </SNotification>
    )
  }

  return (
    <SNotification>
      <Letter />
      <span>
        We have sent confirmation link to your email.
        <br /> If you don't see the email, check your spam folder.
      </span>
    </SNotification>
  )
}

export default Notification
