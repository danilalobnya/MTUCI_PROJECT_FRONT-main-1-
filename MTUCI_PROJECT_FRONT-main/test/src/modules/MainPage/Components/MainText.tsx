import React from 'react'
import styles from './Components.module.css'

export const MainText: React.FC = () => {


    return (

            <div className={styles.maintextcontainer}>
                <div>
                    <span className={styles.maintext1}>Первая бесплатная</span>
                    <span className={styles.maintext2}>&nbsp;онлайн-школа по множеству киберспортивных дисциплин.</span>
                </div>
                <div className={styles.mainlowertext}>
                    <span className={styles.maintext3}>Многие геймеры до сих пор спорят что же лучше: DOTA 2 или LoL. Мы же считаем, что обе эти игры по-своему прекрасны. Наш проект создан с целью помочь игрокам повысить свой уровень игры в данных MOBA-дисциплинах.</span>
                </div>
            </div>

    )

}