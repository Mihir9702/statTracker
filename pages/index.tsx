import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../src/components/navbar/index'
import Main from '../src/components/main/index'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Overwatch 2 Stat Tracker</title>
        <meta name="description" content="Statistic tracker for Overwatch 2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  )
}

export default Home
