import React from "react";
import styles from './CoursItem.module.css'

//Параметр 'dota' отвечает за цвет блоков, true, если блоки для dota и false, если для lol

export interface CoursItemProps {
    titleIcon: string
    title: string
    timeInfo: string
    thesis: string[]
    dota: boolean
}


export const CoursItem: React.FC<CoursItemProps> = (props: CoursItemProps) => {


    return (

        <div className={styles.container} style={{border: props.dota ? '3px solid #C14140' : '3px solid #C89B3C'}}>
            <div className={styles.titleBlock}>
                <span className={styles.title}>{props.title}</span>
                <img src = {props.titleIcon} alt = 'titleIcon' className={styles.titleIcon}></img>
            </div>
            <div className={styles.thesisBlock}>
                {props.thesis.map((item, key) => <li key = {key} className={styles.thesis}>{item}</li>)}
            </div>
            <div className={styles.timeInfo}>{props.timeInfo}</div>
            <button className={styles.startButton} style={{border: props.dota ? '1px solid #C14140' : '1px solid #C89B3C'}}>Начать</button>
        </div>

    )

}