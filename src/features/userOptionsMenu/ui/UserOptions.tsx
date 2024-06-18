import { useLogin } from 'features/auth/byEmail'
import s from './styles.module.scss'
import { DetailedHTMLProps } from 'react'
import { HtmlHTMLAttributes } from 'react'

interface UserOptionsProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isMenuOpen: boolean
  setIsMenuOpen: (input: boolean) => void
}

function UserOptions({ isMenuOpen, setIsMenuOpen }: UserOptionsProps) {
  const menuStyles = isMenuOpen ? `${s.menu} ${s.active}` : s.menu
  const logOut = useLogin(state => state.logOut)
  const handleClick = () => {
    logOut()
    setIsMenuOpen(false)
  }

  return (
    <ul className={menuStyles}>
      <li onClick={handleClick}>Sign Out</li>
    </ul>
  )
}

export default UserOptions
