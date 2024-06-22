import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from 'shared/assets/images/logo.svg?react'

import s from './styles.module.scss'
import { useCurrentUser } from 'shared/services/queries'
import { useLogin } from 'features/auth/byEmail'
import { useEffect } from 'react'
import { GenerateOptions } from 'entities/GenerateOptions'
import { useState } from 'react'
import { useRef } from 'react'
import { UserOptions } from 'features/userOptionsMenu'
const Header = () => {
  const [isGenerateMenuOpen, setIsGenerateMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const isLoggedIn = useLogin(state => state.isLoggedIn)

  const checkToken = useLogin(state => state.checkToken)
  const token = localStorage.getItem('token') || ''
  const generateRef = useRef<HTMLDivElement>(null)
  const userRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    checkToken(token)
  }, [checkToken, token])
  const { data, isSuccess } = useCurrentUser(token)

  useEffect(() => {
    const currentUrl = location.pathname
    if (currentUrl.includes('/generate')) {
      setIsGenerateMenuOpen(false)
    }
  }, [location])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        generateRef.current &&
        !generateRef.current.contains(e.target as Node)
      ) {
        setIsGenerateMenuOpen(false)
      }
      if (userRef.current && !userRef.current.contains(e.target as Node)) {
        setIsUserMenuOpen(false)
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
        <div className={s.generate} ref={generateRef}>
          <span
            onClick={() => setIsGenerateMenuOpen(prev => !prev)}
            style={
              location.pathname.includes('/generate')
                ? { fontWeight: '700' }
                : {}
            }
          >
            generate
          </span>
          <GenerateOptions
            isMenuOpen={isGenerateMenuOpen}
            setIsMenuOpen={setIsGenerateMenuOpen}
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
            <Link to={'/subscribe'}>subscribe</Link>
            {isSuccess && (
              <div className={s.username} ref={userRef}>
                <span
                  onClick={() => setIsUserMenuOpen(prev => !prev)}
                >{`@${data.data.username}`}</span>
                <UserOptions
                  isMenuOpen={isUserMenuOpen}
                  setIsMenuOpen={setIsUserMenuOpen}
                />
              </div>
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
