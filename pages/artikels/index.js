import styles from '../../styles/Artikels.module.css'
import Link from 'next/link'
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';



export const getStaticProps = async () => {
  
  const res = await fetch ('http://unhas.ac.id/v2/wp-json/wp/v2/posts/?_embed')
  const data = await res.json();

 return{
   props: {art: data}
 }
}
 


const Artikels = ({art}) => {
  const[arx, setArt] = useState(null)

  useEffect(()=>{
    setTimeout(async() =>{
      setArt(art);
    }, 1000)
  })
  
  
  
  
  return (
    
    <div>
      
      <Navbar/>
      {arx &&(
      
      <div className={styles.container}>
        <div className={styles.row}>
        <div className={styles.col_2}>
    
      {arx.map(ar =>(
        <Link href={'/artikels/'+ ar.id} key={ar.id}>
          
          <a  className={styles.single}>
  
            <h3>{ar.title.rendered} </h3>
            <article
          className={styles.content}
          dangerouslySetInnerHTML={ {
            __html: ar.excerpt.rendered
          } } />
          
          </a>
        </Link>

      ))}
      </div>
     
      <div className={styles.col_1}>
      <div className={styles.sidebar}>
     <Sidebar/>
      </div>
      </div>
      </div>
      </div>
      )}

      {!arx && [1,2,3,4,5,6].map(n => (
        <div>
        <div className={styles.skeletontitle}></div>
        <div className={styles.skeletontext}></div>
        </div>
      ))}
    </div>
    
    );
}
 
export default Artikels;