import React from 'react'
import styles from './Components.module.css'
import vk from './Images/vk.png'
import tg from './Images/tg.png'
import yt from './Images/yt.png'
import support from './Images/support.png'


export const Links: React.FC = () => {


    return (
    
            <div className={styles.linksbox}>
                <a href='https://t.me/danila1000_7'>
                    <img className={styles.linksupport} src={support}/>
                </a>
                <a href='https://vk.com/danblla1337'>
                    <img className={styles.linkvk} src={vk}/>
                </a>
                <a href='https://t.me/danila1000_7'>
                    <img className={styles.linktg} src={tg}/>
                </a>
                <a href='https://vk.com/danblla1337'>
                    <img className={styles.linkyt} src={yt}/>
                </a>
            </div>

    )
}