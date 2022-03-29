import React from 'react'
import MainUI from './MainUI'
import { useRouter } from 'next/router'

const Main = () => {
  const [search, setSearch] = React.useState('')
  const router = useRouter()
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    // split search between the #
    // Todo: make this work for other platforms
    if (search) {
      const name = search.split('#')[0]
      const tag = search.split('#')[1]

      router.push(`/player/${name}-${tag}`)
    }
  }
  return (
    <MainUI search={search} setSearch={setSearch} handleSearch={handleSearch} />
  )
}

export default Main
