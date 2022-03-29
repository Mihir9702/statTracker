import React, { useEffect } from 'react'
import axios from 'axios'
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
      <h1>Player: {player.name}</h1>
      {player.icon}
      {/* hacky solution for now until i can set a default image for next image src */}
      <img src={player.icon} alt="player icon" />
      <div>Level: {player.level}</div>
      <div>Won: {player.gamesWon}</div>
    </>
  )
}

export default Player
