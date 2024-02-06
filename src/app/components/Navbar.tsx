import Link from "next/link"
import ThemeSwitcher from "./ThemeSwitcher"
import { Fira_Code } from "next/font/google"
import styles from "../styles/navbar.module.css"

const font = Fira_Code({ weight: "700", subsets: ['latin'] })

const Navbar = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href={"/"}>
          <div className={styles.animated}>
            <span className="text-pink-600 text-3xl font-semibold">M</span><span className={styles.text}>arcos</span>
            <span className="text-pink-600 text-3xl font-semibold">E</span><span className={styles.text}>duardo</span>
            <span className="text-pink-600 text-3xl font-semibold">W</span><span className={styles.text}>iniarski</span>
          </div>
        </Link>
        <ThemeSwitcher />
      </div >
    </div>
  )
}

export default Navbar
