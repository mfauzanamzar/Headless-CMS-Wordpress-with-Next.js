import Head from 'next/head';
import styled from '@emotion/styled';
import { url } from '../../../config/next.config';
import Navbar from '../../../components/Navbar';
import getConfig from 'next/config';
import styles from '../../../styles/Artikels.module.css';
import Aos from 'aos';
import { useEffect, useState } from 'react';
import "aos/dist/aos.css";
import axios from 'axios';
import  { Redirect, Router } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const {publicRuntimeConfig } = getConfig();
function kembali(){
    const router = useRouter();
    useEffect(() =>{
        setTimeout(async() =>{
            router.push('/personal');
        }, 1000)
    })
}
function tambah (){

  const router = useRouter();
  useEffect(() => {
    setTimeout(async () => {
      Aos.init({ duration: 2000 })
    }, 1000)
  })
  const [namaa, setNama] = useState('')
  const [nimm, setNim] = useState('')
  const [bidangg, setBidang] = useState('')
  const [gambarr, setGambar] = useState('')

  async function tambah() {

    axios
        .post(`${url}/creators`, {
            nama: namaa,
            nim: nimm,
            bidang: bidangg,
            gambar: gambarr 
        })
        .then(response => {
            console.log(response);
        });

        //useEffect(() =>{
        //    setTimeout(() =>{
                router.push('/personal');
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
            <div className={styles.coba2}>
                <h2>
                    Tambah Creator
                </h2>

                <form> 
                    <input type="text" onChange={e => setNama(e.target.value) } value ={namaa}
                    placeholder="Nama" /><br />
                    <input type="text" onChange={e => setNim(e.target.value) } value ={nimm} 
                    placeholder="NIM" /><br />
                    <input type="text" onChange={e => setBidang(e.target.value) } value ={bidangg}
                    placeholder="Bidang" /><br />
                    <input type="file"  onChange={e => setGambar(e.target.value) } value ={gambarr}
                    placeholder="gambar" /><br />
                    <button type="button" onClick={() => tambah()}>Add Person</button>
                </form>
            </div>
        </AddPersonStyled>
      </div>


    </div>
  )
}

const AddPersonStyled=styled.div`
    input {
        padding : 10px;
        margin-bottom: 20px; 
        border: 1px solid #ccccc;
        border-radius: 4px;
    }
`

export default tambah;