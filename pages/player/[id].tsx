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
      {/* Match History section either set value of 24rem or max-content dependant on content */}
      {/* Spacing / Gap can either be through flexbox (right now it is flexbox) can be center with gap-x */}
      <div className="flex justify-evenly mt-32">
        <div className="flex-none w-max bg-red-50">
          No idea what to add here
        </div>
        <div className="flex-initial w-96 bg-gray-50">
          Matches / Games Played Section
        </div>
        <div className="flex-initial w-max bg-slate-100 rounded-lg">
          <div className="flex justify-center gap-x-6 p-4 items-center">
            <h1 className="font-medium">{player.name}</h1>
            <img
              src={player.icon}
              alt="player icon"
              className="h-12 rounded-md"
            />
          </div>
          <div className="flex-col">
            <span className="flex p-4 my-4 justify-start items-center text-lg font-medium ">
              <img
                className="w-8"
                src={player.ratings[0].rankIcon}
                alt="skill rating icon"
              />
              <h3 className=''>{player.ratings[0].level}</h3>
            </span>
            <span className="flex p-4 my-4 justify-start items-center text-lg">
              <img
                className="w-8"
                src={player.ratings[0].roleIcon}
                alt="skill rating icon"
              />
              <h3 className=''>
                {player.ratings[0].role.charAt(0).toUpperCase() +
                  player.ratings[0].role.slice(1)}
              </h3>
            </span>
          </div>
          {}
        </div>
        {/* 
          player.competitiveStats.topHeroes = {
            // [heroName] is the object keys
            [heroName]: {
              
            }
          }
        */}
        {/* Loop through player.competitiveStats and display all content for each heroName */}
        {/* combat, game, and matchAwards should be in separate divs */}
      </div>
    </>
  )
}

export default Player
