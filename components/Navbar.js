import React from 'react';
import styles from '../styles/Artikels.module.css';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
          
        <div className={styles.navbar_container}>
          <ul className={styles.navbar_left}>
            <div className={styles.navbar_left_logo}>
           
            </div>
          </ul>
          <ul className={styles.navbar_right}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/artikels">Artikels</a>
            </li>
           
          </ul> 
          
        </div>
        </div>
       
    )
}
