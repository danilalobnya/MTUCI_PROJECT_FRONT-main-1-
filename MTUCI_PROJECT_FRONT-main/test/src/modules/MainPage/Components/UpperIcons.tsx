import React from 'react'
import { Banner1 } from './Banner1.tsx'
import styles from './Components.module.css'
import dotaimg from './Images/dotaimg.png'
import lolimg from './Images/lolimg.png'
import { redirect } from '../../../helpers/rediret.ts';
import dota1 from './../../MainPage/Components/Images/dota1.png'
import lol1 from './../../MainPage/Components/Images/lol1.png'


export const UpperIcons: React.FC = () => {


    return (

            <div className={styles.upperrr}>
                <div className={styles.uppericonbox1}>
                    <Banner1 text='Присоединись к битве древних'/>
                    <Banner1 text='Пополни ряды призывателей'/>
                </div>
                <div className={styles.uppericonbox2}>
                    <div>
                        <img className={styles.dota1} src={dota1}/>
                    </div>
                    <div>
                        <img className={styles.lol1} src={lol1}/>
                    </div>
                    <div onClick={() => redirect('http://localhost:3000/Dota')}>
                        <img className={styles.dotaimg} src={dotaimg}/>
                    </div>
                    <div onClick={() => redirect('http://localhost:3000/LoL')}>
                        <img className={styles.lolimg} src={lolimg}/>
                    </div>
                </div>
            </div>

    )

}