import Link from "next/link"
import { Github, Linkedin } from "./Icons"

interface Props {
  hidden: boolean
}

const SocialMediaLinks = ({hidden = true}: Props) => {
  return (
    <nav className={`${hidden ? 'hidden': 'flex'} xl:flex mx-auto mb-2 my-6 justify-center`}>
      <Link className="mx-3" target="_blank" href={"https://github.com/Marcoswinrar"}>
        <Github />
      </Link>
      <Link className="mx-3" target="_blank" href={"https://www.linkedin.com/in/marcosmew96/"}>
        <Linkedin />
      </Link>
    </nav>
  )
}

export default SocialMediaLinks
