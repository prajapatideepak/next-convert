import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "./component/navbar"
export default function Home() {
  return (
    <div className={'bg-[#0A192F] min-h-screen'}>
      <Head>
        <title>Prajapati Deepak </title>
        <meta name="description" content="Deepak Prajapati is Frotend Engineer " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={"mx-4"}>
        <Navbar/>
      <div className='px-20 py-20 space-y-4'>
        <h1  className='text-7xl font-bold bg-clip-text  text-transparent bg-transparent bg-gradient-to-r from-blue-100 to-blue-200'>
        Deepak Prajapati.
        </h1>
        <h2 className='text-7xl text-gray-500 font-bold'>I build things for the web.</h2>
        <p className='text-gray-400 w-2/3 pb-5 pt-4 font-semibold'>
          I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
        </p>
  <button className=' border-1 border text-green-300 border-green-400 text-lg rounded px-10 py-2 mt-20'>
              Hire For Project
        </button>
        </div>
      </main>

      
    </div>
  )
}
