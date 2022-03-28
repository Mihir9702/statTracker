import React from 'react'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Popover, Transition } from '@headlessui/react'

interface NavItems {
  name: string
  description: string
  href: string
  icon: any
}

interface Props {
  title: string
  navItems: NavItems[]
}

const NavPopup = (props: Props) => {
  return (
    <Popover className="relative">
      <>
        <Popover.Button className="bg-transparent rounded-sm inline-flex items-center text-base font-medium dark:hover:text-orange-400 hover:text-gray-900 dark:text-gray-50 focus:outline-none whitespace-nowrap">
          <span>{props.title}</span>
          <ChevronDownIcon
            className="ml-2 h-5 w-5 group-hover:text-gray-500 dark:group-hover:text-slate-50"
            aria-hidden="true"
          />
        </Popover.Button>

        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative grid gap-6 bg-white dark:bg-slate-800  shadow-sm px-5 py-6 sm:gap-8 sm:p-8">
                {props.navItems.map(item => (
                  <Link key={item.name} href={item.href}>
                    <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-slate-600 dark:text-gray-50">
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-orange-600 dark:text-orange-600"
                        aria-hidden="true"
                      />
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900 dark:text-gray-50">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-50">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    </Popover>
  )
}

export default NavPopup
