import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/navbar'


export default function Home() {
  return (
    <>
    <Head>
      <title>News Page</title>
    </Head>
      <div className="container mx-auto">
        <Navbar/>
      </div>
    </>

  )
}
