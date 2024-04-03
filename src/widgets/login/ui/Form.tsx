import { Link } from 'react-router-dom'
import s from './style.module.scss'
import Arrow from 'shared/assets/images/arrow-next.svg?react'

const LoginForm = () => {
  return (
    <div className={s.wrapper}>
      <h2>Login</h2>
      <form action="">
        <label htmlFor="">Email address</label>
        <input type="email" name="" placeholder="Enter your email address" />
        <label htmlFor="">Password</label>
        <input type="password" name="" placeholder="Enter your password" />
        <Link to={'/create-acc'}>Create an account</Link>
        <button type="submit">
          <Arrow />
        </button>
      </form>
    </div>
  )
}

export default LoginForm
