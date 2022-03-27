import React, { useState } from 'react'
import Link from 'next/link'
import ToggleTheme from './ToggleTheme'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [display, setDisplay] = useState('hidden')
  const [menu, setMenu] = useState(false)

  const handleMenuToggle = () => {
    setMenu(!menu)
    if (!menu) {
      setDisplay('block')
    } else {
      setDisplay('hidden')
    }
  }

  return (
    <nav className="z-10 p-5 py-12 shadow-md md:inset-auto md:flex md:items-center md:justify-end">
      <ul
        className={`${display} text-center pt-16 md:pt-0 text-xl lg:text-2xl md:flex md:items-center`}
      >
        <ListLink href="/" text="Home" />
        <ListLink href="/heroes" text="Heroes" />
        <ListLink href="/leaderboards" text="Leaderboards" />
        <ListLink href="/analyze" text="Analyze" />
      </ul>
      <div className="absolute left-0 md:top-5 top-3 p-8 text-2xl">
        <ToggleTheme />
      </div>
      <button
        className="pointer absolute right-0 top-0 p-8 py-10 text-3xl md:hidden"
        onClick={handleMenuToggle}
      >
        {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    </nav>
  )
}

interface T {
  href: string
  text: string
}

const ListLink: React.FC<T> = ({ href, text }) => {
  return (
    <li className="relative mx-4 my-6 cursor-pointer md:my-0">
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </li>
  )
}

export default Navbar
