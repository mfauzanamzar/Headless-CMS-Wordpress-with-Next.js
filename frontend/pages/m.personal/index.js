import Head from 'next/head'
import { url } from '../../config/next.config'
import Navbar from '../../components/m.Navbar'
import styles from '../../styles/Artikels.module.css'
import Card from '../../components/m.Card'
import Aos from 'aos';
import { useEffect, useState } from 'react';
import "aos/dist/aos.css";

import 'react-toastify/dist/ReactToastify.css';





const personal = ({ art }) => {
  useEffect(() => {
    setTimeout(async () => {
      Aos.init({ duration: 2000 })
    }, 1000)
  })


  return (

    <div>
      <Navbar />
      <Head>
        <title>Personal</title>

      </Head>

      <div data-aos="fade-right" className={styles.main}>
        <div className={styles.kotak}>Our Team </div>
        <div className={styles.flexing}>
          {art.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </div>
        <div className={styles.tambahMarginTop}>
          <a href={'/m.personal/m.tambah'} className={styles.kotak} >
            Tambah
          </a>
        </div>
      </div>


    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${url}/creators`);
  const data = await res.json();

  return {
    props: {
      art: data
    },

  };
};

export default personal;