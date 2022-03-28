import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import tracer from '../src/assets/tracer.svg'
import Navbar from '../src/components/navbar/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Overwatch 2 Stat Tracker</title>
        <meta name="description" content="Statistic tracker for Overwatch 2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </>
  )
}

export default Home
