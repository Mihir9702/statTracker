import React, { useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'

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
  return (
    <button
      className="hover:text-orange-400 dark:hover:text-orange-400 dark:text-white "
      onClick={handleTheme}
    >
      {theme ? (
        <SunIcon className="w-6 h-6" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      )}
    </button>
  )
}

export default ToggleTheme
