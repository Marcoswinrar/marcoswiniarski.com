import Link from "next/link"

const MenuLinks = () => {
  return (
    <nav className={navStyle}>
      <Link className={linkStyle} href={"/"}>Home</Link>
      <Link className={linkStyle} href={"/about"}>Sobre Mim</Link>
      <Link className={linkStyle} href={"/projects"}>Projects</Link>
    </nav>
  )
}

const navStyle = `
  hidden 
  h-[10rem]
  xl:flex 
  items-center 
  flex-col 
  space-y-5 
  py-6 
`

const linkStyle = `
  hover:text-pink-500
`

export default MenuLinks
