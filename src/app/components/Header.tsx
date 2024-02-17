
interface Params {
  title: string
}

const Header = ({title}: Params) => {
  return (
    <h1 className="text-center m-5 uppercase">{title}</h1>
  )
}

export default Header
