import React from 'react'
import Image from 'next/image'
import logo from '../../assets/logo.png'
import ToggleTheme from './ToggleTheme'
import { XIcon } from '@heroicons/react/outline'
import { tierlist, more } from './navItems'
import { Transition, Popover } from '@headlessui/react'

const Mobile = () => {
  return (
    <Transition
      as={React.Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden dark:bg-gray-800"
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 dark:bg-gray-600 divide-gray-50 dark:divide-slate-800">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div className="w-48 m-auto">
                <span className="sr-only">Logo Image</span>
                <Image className="h-8 w-auto" src={logo} alt="Workflow" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {tierlist.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-slate-500"
                  >
                    <item.icon
                      className="flex-shrink-0 h-6 w-6 text-orange-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900 dark:text-white">
                      {item.name}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <a href="#" className="mobile-links">
                💕 Support us
              </a>
              <a href="#" className="mobile-links">
                About
              </a>
              {more.map(item => (
                <a key={item.name} href={item.href} className="mobile-links">
                  {item.name}
                </a>
              ))}
            </div>
            <div>
              <a
                href="#"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm cursor-pointer text-base font-medium text-white bg-blue-500 hover:bg-blue-600"
              >
                My Battletag
              </a>
              <p className="mt-6 mr-8 text-center text-base font-medium text-gray-500">
                <ToggleTheme />
              </p>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  )
}

export default Mobile
