import styles from '../styles/Artikels.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Moment from 'react-moment'






const Sidebar = ({ ars }) => {
  const [arc, setArt] = useState([])

  useEffect(async () => {

    const res = await fetch('http://unhas.ac.id/v2/wp-json/wp/v2/posts/?')
    const data = await res.json();
    setArt(data);

  })




  return (

    <div>






      <div>

        <h3 className={styles.single1}>Berita Terbaru</h3>
        {arc.map(ar => (
          <Link href={'/artikels/' + ar.id} key={ar.id}>

            <a className={styles.single_sidebar}>
              <div className={styles.row}>
                <div className={styles.col_3}>
                  <div className={styles.date}>
                    <div className={styles.day}>
                      <Moment format="D">
                        {ar.date}
                      </Moment>
                    </div>
                    <div className={styles.month}>
                      <Moment format="MMM">
                        {ar.date}
                      </Moment>
                    </div>
                  </div>
                </div>

                <div className={styles.col_4}>
                  <div  className={styles.sidebar_title}>
                  <a >
                  {ar.title.rendered}
                </a></div>
                </div>

              </div>
            </a>
          </Link>

        ))}
      </div>



    </div>





  )
}


export default Sidebar;