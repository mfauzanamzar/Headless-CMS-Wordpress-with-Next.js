import Head from 'next/head';
import styled from '@emotion/styled';
import { url } from '../../../config/next.config';
import Navbar from '../../../components/m.Navbar';
import getConfig from 'next/config';
import styles from '../../../styles/Artikels.module.css';
import Aos from 'aos';
import { useEffect, useState } from 'react';
import "aos/dist/aos.css";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const { publicRuntimeConfig } = getConfig();
function tambah() {


  const router = useRouter();
  useEffect(() => {
    setTimeout(async () => {
      Aos.init({ duration: 2000 })
    }, 1000)
  })
  const [namaa, setNama] = useState('')
  const [nimm, setNim] = useState('')
  const [bidangg, setBidang] = useState('')
  const enabled =
    namaa.length > 0 &&
    nimm.length > 0 &&
    bidangg.length > 0;

  async function tambah() {
    const formElement = document.querySelector('form');

    formElement.addEventListener('submit', (e) => {
      e.preventDefault();

      const request = new XMLHttpRequest();

      request.open('DELETE', '/upload');

      request.send(new FormData(formElement));
    });

    axios
      .felete(`${url}/creators`, {
        nama: namaa,
        nim: nimm,
        bidang: bidangg
      })
      .then(response => {
        console.log(response);
      });
    toast.configure()
    toast.dark('Data Berhasil Ditambah', { position: toast.POSITION.TOP_CENTER })

    //useEffect(() =>{
    //    setTimeout(() =>{
    router.push('/m.personal');
    //    }, 3000)
    //},[])

  }
  return (

    <div>
      <Navbar />
      <Head>
        <title>Tambah Creator</title>
      </Head>
      <div data-aos="fade-right" className={styles.main}>
        <AddPersonStyled>
          <div className={styles.loginbox}>
            <h2>Tambah Creator</h2>
            <form >
              <div className={styles.userbox}>
                <input type="text" onChange={e => setNama(e.target.value)} value={namaa} placeholder="Masukkan Nama" /><label>Nama</label></div>
              <div className={styles.userbox}>
                <input type="text" onChange={e => setNim(e.target.value)} value={nimm} placeholder="Masukkan Nama" /><label>NIM</label></div>
              <div className={styles.userbox}>
                <input type="text" onChange={e => setBidang(e.target.value)} value={bidangg} placeholder="Masukkan Nama" /><label>Bidang</label> </div>
              <button type="button" onClick={() => tambah()} disabled={!enabled}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                      Add Person</button>
            </form>
          </div>
        </AddPersonStyled>
      </div>


    </div>
  )
}

const AddPersonStyled = styled.div`
    input {
        padding : 10px;
        margin-bottom: 20px; 
        border: 1px solid #ccccc;
        border-radius: 4px;
    }
`

export default tambah;