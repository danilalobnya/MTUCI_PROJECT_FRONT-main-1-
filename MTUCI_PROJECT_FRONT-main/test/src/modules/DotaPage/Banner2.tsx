import React from 'react'
import styles from './../../pages/DotaApp/Dota.module.css'
import img1 from './Images/Rectangle 62.png'
import img2 from './Images/Rectangle 64.png'


export const Banner2: React.FC = () => {


    return (

            <div className={styles.banner2}>
                <div className={styles.gradient}></div>
                <img src={img1} className={styles.banner2img1}/>
                <img src={img2} className={styles.banner2img2}/>
            </div>

    )
}