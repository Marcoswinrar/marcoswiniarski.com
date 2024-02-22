
interface Params {
  title: string
}

const Header = ({title}: Params) => {
  return (
    <h1 className="text-2xl xl:text-4xl my-5">{title}</h1>
  )
}

export default Header;
