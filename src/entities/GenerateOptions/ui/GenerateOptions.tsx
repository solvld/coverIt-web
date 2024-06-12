import { useLogin } from 'features/auth/byEmail'
import { Link } from 'react-router-dom'
import s from './styles.module.scss'
import { DetailedHTMLProps } from 'react'
import { HtmlHTMLAttributes } from 'react'

interface GenerateOptionsProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isMenuOpen: boolean
  setIsMenuOpen: (input: boolean) => void
}

function GenerateOptions({ isMenuOpen }: GenerateOptionsProps) {
  const isLoggedIn = useLogin(state => state.isLoggedIn)
  const menuStyles = isMenuOpen ? `${s.menu} ${s.active}` : s.menu
  return (
    <ul className={menuStyles}>
      <li>
        <Link to={'/generate/playlist'}>playlist</Link>
      </li>
      <li>
        <Link to={isLoggedIn ? '/generate/release' : '/sign-in'}>release</Link>
      </li>
    </ul>
  )
}

export default GenerateOptions
