import React from "react";
import styles from './LoLCoursBlock.module.css'
import { CoursItem } from "./CoursItem/CoursItem.tsx";

//Импорт блоков для курсов в папке '.CoursItems.ts'

interface Item {
    title: string
    titleIcon: string
    timeInfo: string
    thesis: string[] 
}


export interface CoursBlockProps {
    dota: boolean
    items: Item[]
}


export const CoursBlock: React.FC<CoursBlockProps> = (props: CoursBlockProps) => {

    return (

        <div className={styles.wrapper}>
            <div className={styles.container}>
                {props.items.map((item, key) => <CoursItem key = {key} titleIcon = {item.titleIcon} title = {item.title} timeInfo = {item.timeInfo} thesis = {item.thesis} dota = {props.dota}/>)}
            </div>
        </div>

    )

}