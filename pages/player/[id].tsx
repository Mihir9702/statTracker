import React, { useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Player = () => {
  const [player, setPlayer] = React.useState<any>({})
  const router = useRouter()
  const { id } = router.query

  const fetchPlayerData = async (id: any) => {
    const response = await axios.get(`https://ovrstat.com/stats/pc/${id}`)
    setPlayer(response.data)
  }

  if (player) {
    console.log(player)
  }

  useEffect(() => {
    if (!id) {
      router.push('/')
    } else {
      fetchPlayerData(id)
    }
  }, [router, id])

  return (
    <>
      <Head>
        <title>{player.name}</title>
        <meta name="description" content="lorem ipsum" />
      </Head>
      {/* Some more stats I can add here just rough layout for now */}
      <div className="flex justify-evenly mt-32">
        <div className="flex-none w-max bg-red-50">
          No idea what to add here
        </div>
        <div className="flex-initial w-96 bg-gray-50">
          Matches / Games Played Section
        </div>
        <div className="flex-initial w-max bg-slate-400 rounded-lg">
          <div className="flex justify-center gap-x-6 p-4 items-center">
            <h1 className="font-medium">{player.name}</h1>
            <img
              src={player.icon}
              alt="player icon"
              className="h-12 rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Player
