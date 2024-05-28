import React from 'react'
import styles from './../../pages/DotaApp/Dota.module.css'
import { redirect } from '../../helpers/rediret.ts'
import img1 from './Images/void.png'
import img2 from './Images/void arcana.png'
import img3 from './Images/bronze.png'
import img4 from './Images/grandmaster.png'


const markers: string[] = ['Первый пункт', 'Второй пункт', 'Третий пункт', 'Четвертый пункт']

export const Banner3: React.FC = () => {


    return (

            <div className={styles.banner3}>
                <p className={styles.headertext}>ГРАНДМАСТЕР С НУЛЯ</p>
                <div className={styles.arrow}>
                    <div></div>
                </div>
                <img src={img1} className={styles.banner3img1}/>
                <img src={img2} className={styles.banner3img2}/>
                <img src={img3} className={styles.banner3img3}/>
                <img src={img4} className={styles.banner3img4}/>
                <p className={styles.banner3text1}>У многих игроков есть свои любимые герои, однако зачастую они не могут показать высокий уровень исполнения на этих персонажах.</p>
                <p className={styles.banner3text2}>Данный набор гайдов создан для того чтобы исправить эту проблему.</p>
                <ul className={styles.spisok}>
                    {markers.map((item, key) => <li key = {key} className={styles.li}>{item}</li>)}
                </ul>
                <p onClick={() => redirect('http://localhost:3000/Dota')} className={styles.click}>Посмотреть список гайдов</p>
            </div>

    )
}