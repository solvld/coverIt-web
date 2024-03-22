import { NavLink } from 'react-router-dom'
import Logo from 'shared/assets/images/logo.svg?react'
import s from './styles.module.scss'

const Header = () => {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? s.activeNavLink : s.navLink
  return (
    <header className={s.header}>
      <nav>
        <NavLink to={'/'} className={linkStyle}>
          generate
        </NavLink>
        <Logo />
        <NavLink to={'/archive'} className={linkStyle}>
          archive
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
