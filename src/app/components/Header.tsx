
interface Props {
  title: string
}

const Header = ({ title }: Props) => {
  return (
    <h1 className="uppercase mb-6 text-lg text-center">
      {title}
    </h1>
  )
}

export default Header
