import React from 'react'
import axios from 'axios'
import { SearchIcon } from '@heroicons/react/solid'

const Main = () => {
  const [search, setSearch] = React.useState('')
  const [results, setResults] = React.useState([])
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    // https://ovrstat.com/stats/pc/Casual-11783
    // Make an axios request to the API to get the stats for the player and then console.log the response
    // You can use the player name from the search bar as the player name in the API request
    // You can use the platform from the search bar as the platform in the API request
    // Axios request can be awaited
    // break search into playerName and platform
    const playerName = search.split('#')[0]
    const platform = search.split('#')[1]
    console.log(playerName, platform)

    const response = await axios.get(
      `https://ovrstat.com/stats/pc/${playerName}-${platform}`
    )
    setResults(response.data)
    console.log(results)
  }
  return (
    <div className="flex justify-center items-center bg-gray-100 dark:bg-slate-900">
      <form onSubmit={handleSearch}>
        <div className="flex justify-between items-center h-screen">
          <div className="mx-auto bg-gray-50 dark:bg-slate-800 dark:text-white">
            <label className="flex items-center px-2 flex-row-reverse border-2 mx-auto rounded-md">
              <input
                className="bg-transparent p-4 outline-none"
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
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

export default Main
