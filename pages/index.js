import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  
  return (
    
    <div>
      <Navbar/>
      <Head>
        <title>Selamat Datang!</title>
    
      </Head>

      <main className={styles.main}>
        <h1>Selamat Datang!</h1>
      </main>

 
    </div>
  )
}
