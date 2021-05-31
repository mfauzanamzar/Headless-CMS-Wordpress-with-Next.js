import Head from 'next/head'
import {url} from '../../config/next.config'
import Navbar from '../../components/Navbar'
import styles from '../../styles/Home.module.css'
import Card from '../../components/Card'
import Aos from 'aos';
import { useEffect, useState } from 'react';
import "aos/dist/aos.css";


export default function Personal({list}) {
    useEffect(() => {
        setTimeout(async () => { Aos.init({duration:2000})
        }, 1000)
    })
  return (
    
    <div>
      <Navbar/>
      <Head>
        <title>Personal</title>
    
      </Head>

      <div  data-aos="fade-right" className={styles.main}>
        <div className={styles.kotak}>About Us </div>
        <div className={styles.flexing}>
          {list.map(item => (
            <Card key={item.id} item={item}/>
          ))}
        </div>
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