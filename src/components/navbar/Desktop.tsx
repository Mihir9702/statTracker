import React from 'react'
import logo from '../../assets/logo.png'
import Image from 'next/image'
import NavPopup from './NavPopup'
import ToggleTheme from './ToggleTheme'
import { Popover } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline'
import { tierlist, more } from './navItems'

const Desktop = () => {
  return (
    <div className="max-w-full mx-auto">
      <div className="flex justify-between px-4 items-center border-b-2 border-gray-100 dark:border-slate-900 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#" className="w-48">
            <span className="sr-only">Logo Image</span>
            <Image src={logo} alt="logo image" />
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 dark:text-gray-50 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden md:flex space-x-10 ">
          <NavPopup title="Tier List" navItems={tierlist} />
          <a
            href="#"
            className="whitespace-nowrap text-base font-medium text-gray-500 dark:text-white hover:text-orange-400 dark:hover:text-orange-400"
          >
            💕 Support Us
          </a>
          <a href="#" className="mobile-links">
            About
          </a>
          <NavPopup title="More" navItems={more} />
        </Popover.Group>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <ToggleTheme />
          <a
            href="#"
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            My Battletag
          </a>
        </div>
      </div>
    </div>
  )
}

export default Desktop
