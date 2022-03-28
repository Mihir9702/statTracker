import React from 'react'
import Mobile from './Mobile'
import Desktop from './Desktop'
import { Popover } from '@headlessui/react'

const Navbar = () => {
  return (
    <Popover className="relative bg-white dark:bg-slate-800 dark:text-gray-100 shadow-md">
      <Desktop />
      <Mobile />
    </Popover>
  )
}

export default Navbar
