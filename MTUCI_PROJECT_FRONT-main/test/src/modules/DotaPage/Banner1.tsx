import React from 'react'
import styles from './../../pages/DotaApp/Dota.module.css'
import img1 from './Images/img1.jpg'

export const Banner1: React.FC = () => {


    return (

            <div className={styles.banner1}>
                <div className={styles.gradient}></div>
                <img src={img1} className={styles.banner1img}/>
                <p className={styles.banner1text}>Присоединись к битве древних вместе с нами</p>
            </div>

    )
}