import Link from "next/link"

const MobileMenu = () => {
  return (
    <nav className="xl:hidden fixed flex flex-col bottom-10 items-center h-[10rem] w-full bg-gradient-to-r from-pink-950 to-indigo-950">
      <Link className="hover:text-pink-500 py-3" href={"/"}>Home</Link>
      <Link className="hover:text-pink-500 py-3" href={"/about"}>Sobre Mim</Link>
      <Link className="hover:text-pink-500 py-3" href={"/projects"}>Projects</Link>
    </nav>
  )
}

export default MobileMenu
