import { NavLink } from 'react-router-dom'
import Logo from 'shared/assets/images/logo.svg?react'
import Profile from 'shared/assets/images/user.svg?react'

import s from './styles.module.scss'
import { useState } from 'react'

const Header = () => {
  const [isLoggedIn] = useState(localStorage.getItem('token'))
  const guardLink = isLoggedIn ? '/profile' : '/sign-in'

  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? s.activeNavLink : s.navLink
  return (
    <header className={s.header}>
      <nav>
        <NavLink to={'/generate'} className={linkStyle}>
          generate
        </NavLink>
        <NavLink to={'/'}>
          <Logo className={s.logo} />
        </NavLink>
        <NavLink to={'/archive'} className={linkStyle}>
          archive
        </NavLink>
      </nav>
      <NavLink to={guardLink}>
        <Profile className={s.profileLink} />
      </NavLink>
    </header>
  )
}

export default Header
