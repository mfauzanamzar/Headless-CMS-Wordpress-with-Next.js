import styles from '../../styles/Artikels.module.css'
import Link from 'next/link'
import Navbar from '../../components/Navbar';
import { Skeleton } from 'react-skeleton-screen'



export const getStaticProps = async () => {
  
  const res = await fetch ('http://unhas.ac.id/v2/wp-json/wp/v2/posts?')
  const data = await res.json();

 return{
   props: {art: data}
 }
}
 
// using CommonJS modules

const Artikels = ({art}) => {
  return (
    
    <div>
      
      <Navbar/>
      <div className={styles.container}>
      <h1 className={styles.title}>Artikels Unhas</h1>
      {art.map(ar =>(
        <Link href={'/artikels/'+ ar.id} key={ar.id}>
          <a  className={styles.single}>
            <h3>{ar.title.rendered} </h3>
            <article
          className={styles.content1}
          dangerouslySetInnerHTML={ {
            __html: ar.excerpt.rendered
          } } />
          
          </a>
        </Link>

      ))}
      </div>
    </div>
    );
}
 
export default Artikels;