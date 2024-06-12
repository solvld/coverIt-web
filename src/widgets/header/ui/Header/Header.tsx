import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from 'shared/assets/images/logo.svg?react'

import s from './styles.module.scss'
import { useCurrentUser } from 'shared/services/queries'
import { useLogin } from 'features/auth/byEmail'
import { useEffect } from 'react'
import { GenerateOptions } from 'entities/GenerateOptions'
import { useState } from 'react'
import { useRef } from 'react'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isLoggedIn = useLogin(state => state.isLoggedIn)
  const logOut = useLogin(state => state.logOut)
  const checkToken = useLogin(state => state.checkToken)
  const token = localStorage.getItem('token') || ''
  const menuRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    checkToken(token)
  }, [checkToken, token])
  const { data, isSuccess } = useCurrentUser(token)

  useEffect(() => {
    const currentUrl = location.pathname
    if (currentUrl.includes('/generate')) {
      setIsMenuOpen(false)
    }
  }, [location])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  })

  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? s.activeNavLink : s.navLink
  return (
    <header className={s.header}>
      <nav>
        <NavLink to={'/'}>
          <Logo className={s.logo} />
        </NavLink>
        <div className={s.generate} ref={menuRef}>
          <span
            onClick={() => setIsMenuOpen(prev => !prev)}
            style={
              location.pathname.includes('/generate')
                ? { fontWeight: '700' }
                : {}
            }
          >
            generate
          </span>
          <GenerateOptions
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
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
            {isSuccess && (
              <span
                className={s.username}
                onClick={logOut}
              >{`@${data.data.username}`}</span>
            )}
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
