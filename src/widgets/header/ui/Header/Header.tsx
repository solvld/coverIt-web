import { Link, NavLink } from 'react-router-dom'
import Logo from 'shared/assets/images/logo.svg?react'

import s from './styles.module.scss'
import { useState } from 'react'
import { useCurrentUser } from 'shared/services/queries'

const Header = () => {
  const [isLoggedIn] = useState(() => {
    if (localStorage.getItem('token')) {
      return true
    }
    return false
  })

  const { data, isSuccess } = useCurrentUser()

  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? s.activeNavLink : s.navLink
  return (
    <header className={s.header}>
      <nav>
        <NavLink to={'/'}>
          <Logo />
        </NavLink>
        <NavLink to={'/generate'} className={linkStyle}>
          generate
        </NavLink>
        <NavLink to={'/archive'} className={linkStyle}>
          archive
        </NavLink>
        {isLoggedIn && (
          <>
            <NavLink to={'/liked'} className={linkStyle}>
              liked playlists
            </NavLink>
            <NavLink to={'/my-playlist'} className={linkStyle}>
              my playlists
            </NavLink>
            <NavLink to={'/find-user'} className={linkStyle}>
              find users
            </NavLink>
          </>
        )}
      </nav>

      <div className={s.profile}>
        {isLoggedIn ? (
          <>
            <Link to={'/'}>subscribe</Link>
            {isSuccess && <span>{`@${data.username}`}</span>}
          </>
        ) : (
          <>
            <NavLink to={'/sign-up'} className={linkStyle}>
              sign up
            </NavLink>
            <NavLink to={'/sign-in'} className={linkStyle}>
              log in
            </NavLink>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
