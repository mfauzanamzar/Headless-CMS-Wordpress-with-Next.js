import Navbar from "../../components/Navbar";
import styles from '../../styles/Artikels.module.css';

export const getStaticPaths = async () => {
    const res = await fetch('http://unhas.ac.id/v2/wp-json/wp/v2/posts?');
    const data = await res.json();

    
    const paths = data.map(ninja => {
        return{
            params: { id: ninja.id.toString() }
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
    return ( 
        <div >
            <Navbar/>
            <div className={styles.container}>
            <h1 className={styles.header}>{ninja.title.rendered}</h1>
            
            <div
          className={styles.content}
          dangerouslySetInnerHTML={ {
            __html: ninja.content.rendered
          } } />
           </div>
        </div>
      
     );
     
}
 
export default Details ;