import Head from 'next/head'

import Navbar from '../components/m.Navbar'
import styles from '../styles/Artikels.module.css'
import {isWindows} from 'react-device-detect';
import {useRouter} from 'next/router'
import {useEffect} from 'react'


export default function Home() { 
  
  const router = useRouter()

  if(isWindows) {
   
      useEffect(() => {
        setTimeout(()=>{
          router.push('/')
        }, 3000)
      
     
       })
      
      
        return (
       
        
         
    <div>
    <Navbar/>
  
    <div className={styles.main}>
      <h1>Oops...</h1>
      <h3>Halaman ini untuk Mobile</h3>
    </div>
   


  </div>
       
        )
          
    
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
      <a href="/m.artikels" className={styles.kotak}>Ayo Membaca Kawan</a>
      </div>

 
    </div>
  )
}
