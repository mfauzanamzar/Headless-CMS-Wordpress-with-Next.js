import styled from '@emotion/styled'
import {url} from '../config/next.config'
import styles from '../styles/Home.module.css'

function Card({item}) {
     return (
         <CardStyled>
            <div>
            <div className={styles.coba2}>
                <div className="poster">
                    <img src={url+item.gambar[0].formats.medium.url} alt="" className={styles.coba}/>
                </div>
            </div>
            </div>
            <div className={styles.putih}>
            <div>
                <div className="body">
                    <h5>{item.nama}</h5>
                    <h6>{item.nim}</h6>
                    <p dangerouslySetInnerHTML={{__html: item.bidang}}/>
                </div>
            </div>
            </div>
         </CardStyled>
     )
}

 const CardStyled = styled.div`
    width: 350px;
    border: 1px solid #cccccc;
    margin-top: 30px;
    margin-left: 25px;
    margin-right: 25px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    
    .body{
        padding: 20px;
        

        h5,h6,p{
            color: white;
            background-color: white;
        }
    }
 `


 export default Card