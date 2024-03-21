import { NavLink } from 'react-router-dom'
import Logo from 'shared/assets/images/logo.svg?react'
import  s from './styles.module.scss'

const Header = () => {
  return (
    <header className={s.header}>
      <nav>
        <NavLink to={'/'}>generate</NavLink>
        <Logo />
        <NavLink to={'/archive'}>archive</NavLink>
      </nav>
    </header>
  )
}

export default Header
