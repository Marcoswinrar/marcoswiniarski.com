import Link from "next/link"

const MenuLinks = () => {
  return (
    <nav className="hidden xl:flex py-6 flex-col space-y-5 items-center h-[10rem]">
      <Link className="hover:text-pink-500" href={"/"}>Home</Link>
      <Link className="hover:text-pink-500" href={"/about"}>Sobre Mim</Link>
      <Link className="hover:text-pink-500" href={"/projects"}>Projects</Link>
    </nav>
  )
}

export default MenuLinks
