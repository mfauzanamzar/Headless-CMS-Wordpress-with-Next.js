import Head from 'next/head'
import {url} from '../config/next.config'
import Navbar from '../components/Navbar'
import styles from '../styles/Artikels.module.css'
import Card from '../components/Card'
import {isMobile} from 'react-device-detect';
import {useEffect} from 'react'
import {useRouter} from 'next/router'


export default function Home() {
  
  const router = useRouter()

  if(isMobile) {
   
      useEffect(() => {
      
        router.push('/m.index')
       }, [])
      
      
        return (
        <div>redirect to web for mobile.....</div>)
          
    
}
  


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
      <a href="/artikels" className={styles.kotak}>Ayo Membaca Kawan</a>
      </div>

 
    </div>
  )
}
