import Link from "next/link"
import { MouseEventHandler } from "react"

interface Props {
  handleMenu: MouseEventHandler<HTMLElement>
}

const MobileMenu = ({handleMenu}: Props) => {
  return (
    <nav onClick={handleMenu}  
      className={`${mobileMenuStyle}`}>
      <Link className={linkStyle} href={"/"}>Home</Link>
      <Link className={linkStyle} href={"/about"}>Sobre Mim</Link>
      <Link className={linkStyle} href={"/projects"}>Projetos</Link>
    </nav>
  )
}

const mobileMenuStyle = `
  xl:hidden 
  fixed 
  flex 
  flex-col 
  bottom-10 
  items-center 
  h-[10rem] 
  w-full 
  bg-gradient-to-r 
  from-pink-950 
  to-indigo-950
`

const linkStyle = `hover:text-pink-500 py-3`

export default MobileMenu;
