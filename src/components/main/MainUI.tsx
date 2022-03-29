import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'

interface Props {
  search: string | undefined
  setSearch: React.Dispatch<React.SetStateAction<string>>
  handleSearch: (e: React.FormEvent) => void
}

const MainUI: React.FC<Props> = props => {
  return (
    <div className="flex justify-center items-center bg-gray-100 dark:bg-slate-900">
      <form onSubmit={props.handleSearch}>
        <div className="flex justify-between items-center h-screen">
          <div className="mx-auto bg-gray-50 dark:bg-slate-800 dark:text-white">
            <label className="flex items-center px-2 flex-row-reverse border-2 mx-auto rounded-md">
              <input
                className="bg-transparent p-4 outline-none"
                type="text"
                value={props.search}
                onChange={e => props.setSearch(e.target.value)}
                placeholder="BattleTag#1234"
              />
              <input type="submit" className="hidden" />
              <SearchIcon className="w-6 h-6 text-gray-400" />
            </label>
          </div>
          <div className="flex items-center justify-center bg-gray-50 dark:bg-slate-800 dark:text-white">
            <select className="bg-gray-50 dark:bg-slate-800 dark:text-white">
              <option value="">Select Device</option>
              <option value="pc">PC</option>
              <option value="xbox">XBOX</option>
              <option value="ps4">PS4</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  )
}

export default MainUI
