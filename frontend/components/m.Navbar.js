import React from 'react';
import styles from '../styles/Artikels.module.css';
import logoImage from '../public/logo.png';
import { FaAlignJustify } from 'react-icons/fa';
import { Link } from 'react-scroll'

export default function Navbar() {
    const [nav] = React.useState([
        { url: '/m.index', navName: 'Home' },
        { url: '/m.artikels', navName: 'Artikels' },
        { url: '/m.personal', navName: 'Personal' }
       
    
      ])
    const [state, setState] = React.useState(false)
  return (
      
    <div>
    <nav className={styles.navbar}>

      <div className={styles.navbar_container}>
        <ul className={styles.navbar_left}>
  
          <div className={styles.navbar_left_logo}>
          <img src={logoImage} alt="logo" />
          </div>
        </ul>
      
        {state ? (
            <ul className={styles.navbar_righthidden}>
              {nav.map(nv => (
                <li>
                  <a href={nv.url} className={styles.cursor}>{nv.navName}</a>
                </li>
              ))}
            </ul>) : ("")}
            <div className={styles.toggle} onClick={() => setState(!state)}><FaAlignJustify /></div>
      </div>
      
    </nav>
    

     </div>
  )
}
