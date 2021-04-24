import Navbar from "../../components/Navbar";
import styles from '../../styles/Artikels.module.css';
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";



export const getStaticPaths = async () => {
    const res = await fetch('http://unhas.ac.id/v2/wp-json/wp/v2/posts?');
    const data = await res.json();

    
    const paths = data.map(ninja => {
        return{
            params: { id: ninja.id.toString()}
        }
    })

    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('http://unhas.ac.id/v2/wp-json/wp/v2/posts/' + id);
    const data = await res.json();
    
    return{
        props: {ninja: data}
        
    }

} 


const Details = ({ninja}) => {
    const[ninjax, setNinja] = useState(null)

    useEffect(()=>{
       setTimeout(async() =>{
        setNinja(ninja);
    }, 1000)
    })

    return ( 
        <div >
            <Navbar/>
            <div className={styles.container}>
            {ninjax && (<div>
                <h1 className={styles.header}>{ninjax.title.rendered}</h1>
                <div className={styles.row}>
        <div className={styles.col_2}>  
      
            
            <div
          className={styles.content1}
          dangerouslySetInnerHTML={ {
            __html: ninjax.content.rendered
            } } />
           </div>
           <div className={styles.col_1}>
      <div className={styles.sidebar}>
           <Sidebar/>
           </div>
           </div>
           </div>
           </div>
           )}
            {!ninjax && <div>
        <div className={styles.skeletontitle2}></div>
        <div className={styles.skeletontext2}></div>
        </div>}
            </div>
            </div>
        );
}
 
export default Details ;