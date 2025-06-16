'use client'

import { useState } from 'react'
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
    setIsDark(!isDark)
  }

  return (
    <button onClick={toggleTheme} className="btn btn-ghost">
      {isDark ? (
        <BiSolidMoon className="h-6 w-6" />
      ) : (
        <BiSolidSun className="h-6 w-6" />
      )}
    </button>
  )
}

export default ThemeToggle
