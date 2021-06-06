import Navbar from "../../components/m.Navbar";
import styles from '../../styles/Artikels.module.css';
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Aos from 'aos';
import "aos/dist/aos.css";
import { isWindows } from 'react-device-detect';
import { useRouter } from 'next/router'



export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:1337/creators/');
    const data = await res.json();


    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('http://localhost:1337/creators/' + id);
    const data = await res.json();

    return {
        props: { ninja: data }

    }

}




const Details = ({ ninja }) => {
    const [ninjax, setNinja] = useState(null)

    useEffect(() => {
        setTimeout(async () => {
            Aos.init({ duration: 2000 })
            setNinja(ninja);
        }, 1000)
    })
    const router = useRouter()


    if (isWindows) {

        useEffect(() => {
            setTimeout(() => {
                router.push('/')
            }, 3000)


        })


        return (



            <div>
                <Navbar />

                <div className={styles.main}>
                    <h1>Oops... Halaman ini untuk mobile</h1>
                </div>



            </div>

        )


    }

 
    return (
        <div >
            <Navbar />
            <div className={styles.container}>
                {ninjax && (<div>

                    <div className={styles.roundKotak}>
                    <h1 data-aos="fade-down-right" className={styles.putih} >{ninjax.nama}</h1>
                        <h1 data-aos="fade-down-right" className={styles.putih}>{ninjax.nim}</h1>
                        <h1 data-aos="fade-down-right" className={styles.putih}>{ninjax.bidang}</h1>
                        <div className={styles.delete}>
                        <button type="button" onClick={() => Delete()} >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Delete</button>
                        </div>
                    </div>

                </div>
                )}

            </div>
        </div>
    );
}

export default Details;