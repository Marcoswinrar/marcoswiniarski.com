
"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "./Icons";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null;
  }

  return (
    <button className="mt-2" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <Sun/> : <Moon />}
    </button>
  )
}

export default ThemeSwitcher;
