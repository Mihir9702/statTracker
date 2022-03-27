import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../src/components/Navbar'

const Home: NextPage = () => {
  return (
    <main className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50 ">
      <Head>
        <title>Overwatch 2 Stat Tracker</title>
        <meta name="description" content="Statistic tracker for Overwatch 2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
    </main>
  )
}

export default Home
