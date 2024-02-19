import Link from "next/link"

interface Props {
  hidden?: boolean
}

const SocialMedia = ({ hidden = true }: Props) => {
  return (
    <section className={`${hidden ? 'hidden': 'block'} xl:block text-center my-3`}>
      <Link href={"mailto:marcoswinrar@gmail.com"}>marcoswinrar@gmail.com</Link>
      <p>+55 (45)99918-9193</p>
    </section>
  )
}

export default SocialMedia
