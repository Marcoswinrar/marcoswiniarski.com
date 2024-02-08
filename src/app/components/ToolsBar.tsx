import ThemeSwitcher from "./ThemeSwitcher"

const ToolsBar = () => {
  return (
    <aside className="fixed top-0 right-0 h-full w-50 px-4 py-4 bg:color-pink-600">
      <ThemeSwitcher />
    </aside>
  )
}

export default ToolsBar
