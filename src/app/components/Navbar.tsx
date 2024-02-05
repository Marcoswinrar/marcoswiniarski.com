import Link from "next/link"
import ThemeSwitcher from "./ThemeSwitcher"

const Navbar = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href={"/"}>Geeker Code</Link>
        <div>Navbar</div>
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export default Navbar
