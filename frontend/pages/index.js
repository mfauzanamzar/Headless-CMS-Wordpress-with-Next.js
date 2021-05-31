import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Artikels.module.css'

export default function Home() {
  
  return (
    
    <div>
      <Navbar/>
      <Head>
        <title>Selamat Datang!</title>
    
      </Head>

      <div className={styles.main}>
        <h1>Selamat Datang!</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.kotak}>Created by </div>
        <h3>1. Jabalnur</h3>
        <h3>2. Muhammad Fauzan Amzar</h3>
        <h3>3. Muh. Ishak Ramadhan</h3>
      </div>

 
    </div>
  )
}
