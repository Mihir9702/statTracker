import React, { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ToggleTheme = () => {
  const [theme, setTheme] = useState(false)

  const handleTheme = () => {
    setTheme(!theme)
    if (theme) {
      localStorage.theme = 'light'
    } else {
      localStorage.theme = 'dark'
    }

    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  return <button onClick={handleTheme}>{theme ? <FaSun /> : <FaMoon />}</button>
}

export default ToggleTheme
