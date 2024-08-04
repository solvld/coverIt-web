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
  const menuStyles = isMenuOpen ? `${s.menu} ${s.active}` : s.menu

  return (
    <ul className={menuStyles}>
      <li>
        <Link to={'/generate/playlist'}>playlist</Link>
      </li>
      <li>
        <Link to={'/generate/release'}>release</Link>
      </li>
    </ul>
  )
}

export default GenerateOptions
