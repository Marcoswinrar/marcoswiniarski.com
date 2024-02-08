import Link from "next/link"
import styles from "../styles/navbar.module.css"

const Navbar = () => {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href={"/"}>
          <div className={styles.animated}>
            <span className="text-pink-600 text-3xl font-semibold">M</span><span className={styles.text}>arcos</span>
            <span className="text-pink-600 text-3xl font-semibold">E</span><span className={styles.text}>duardo</span>
            <span className="text-pink-600 text-3xl font-semibold">W</span><span className={styles.text}>iniarski</span>
          </div>
        </Link>
        <nav>
          <ul className="flex justify-between uppercase">
            <li className="px-4 hover:text-pink-600">Home</li>
            <li className="px-4 hover:text-pink-600">About me</li>
            <li className="px-4 hover:text-pink-600">Projects</li>
          </ul>
        </nav>
      </div >
    </div>
  )
}

export default Navbar
