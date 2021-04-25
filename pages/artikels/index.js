import styles from '../../styles/Artikels.module.css'
import Link from 'next/link'
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Moment from 'react-moment'
import Aos from 'aos';
import "aos/dist/aos.css";



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
    setTimeout(async () => { Aos.init({duration:2000})
      setArt(art);
    }, 1000)
  })




  return (

    <div>

      <Navbar />
      {arx && (

        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col_2}>

              {arx.map(ar => (
                <div key={ar.id}>
                  <a data-aos="fade-right" className={styles.single}>
                    <div className={styles.tgl}>
                      <Moment format="dddd, D MMMM YYYY">
                        {ar.date}
                      </Moment>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.col_1}>
                        <img className={styles.img} src={ar._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url} />
                      </div>

                      <div className={styles.col_2}>
                        <h3 >{ar.title.rendered} </h3>
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
                            <a href={'/artikels/' + ar.id} key={ar.id}>
                              READ MORE
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>


                  </a>
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
        <div className={styles.row}>
        <div className={styles.col_5}>
          <div className={styles.skeletontitle}></div>
          <div className={styles.skeletontext}></div>
        </div>
        <div className={styles.col_6}>
          <div className={styles.skeletonnavbar}></div>
          <div className={styles.skeletonnavbar}></div>
          <div className={styles.skeletonnavbar}></div>
        </div>
      </div>
      ))}
    </div>

  );
}

export default Artikels;