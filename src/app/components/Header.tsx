
interface Params {
  title: string
}

const Header = ({title}: Params) => {
  return (
    <h1 className="text-4xl mb-5">{title}</h1>
  )
}

export default Header
