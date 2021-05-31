import Head from 'next/head'
import {url} from '../config/next.config'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'


export default function Home({list}) {
  
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

export const getStaticProps = async () => {
  const data = await fetch(`${url}/creators`);
  const list = await data.json();

  return {
    props: {
      list,
    },
    revalidate: 1, 
  };
};