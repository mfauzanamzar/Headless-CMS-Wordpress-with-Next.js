import styles from '../../styles/Artikels.module.css'
import Link from 'next/link'
import Navbar from '../../components/m.Navbar';
import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Moment from 'react-moment'
import Aos from 'aos';
import "aos/dist/aos.css";
import { isWindows } from 'react-device-detect';
import { useRouter } from 'next/router'




export const getStaticProps = async () => {

    const res = await fetch('http://unhas.ac.id/v2/wp-json/wp/v2/posts/?_embed')
    const data = await res.json();

    return {
        props: { art: data }
    }
}



const Artikels = ({ art }) => {
    const [arx, setArt] = useState(null)

    useEffect(() => {
        setTimeout(async () => {
            Aos.init({ duration: 2000 })
            setArt(art);
        }, 3000)
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

        <div>

            <Navbar />
            {arx && (

                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.col_2}>

                            {arx.map(ar => (
                                <div className={styles.item} key={ar.id}>
                                    <div data-aos="fade-right" className={styles.single}>
                                        <div className={styles.tgl}>
                                            <Moment format="dddd, D MMMM YYYY">
                                                {ar.date}
                                            </Moment>
                                        </div>
                                        <div className={styles.row}>
                                            <div className={styles.col_11}>
                                                <img className={styles.img} src={ar._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url} />
                                            </div>

                                            <div className={styles.col_22}>
                                                <h3 >{ar.title.rendered} </h3>

                                            </div>
                                            <article
                                                className={styles.content}
                                                dangerouslySetInnerHTML={{
                                                    __html: ar.excerpt.rendered
                                                }} />
                                            <div className={styles.row}>
                                                <div>
                                                    Author : {ar._embedded['author'][0].name}
                                                </div>
                                                <div className={styles.button}>
                                                    <a href={'/m.artikels/' + ar.id} key={ar.id}>
                                                        READ MORE
                            </a>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            ))}
                        </div>

                        <div className={styles.col_1}>
                            <div data-aos="fade-down-left" className={styles.sidebar}>
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {!arx && [1, 2, 3, 4, 5, 6].map(n => (
                <div >
                    <div className={styles.col_5}>
                        <div className={styles.skeletontitle}></div>
                        <div className={styles.skeletontext}></div>
                    </div>
                   
                </div>
            ))}
        </div>

    );
}

export default Artikels;