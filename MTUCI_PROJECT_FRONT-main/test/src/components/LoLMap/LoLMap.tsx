import React from "react";
import styles from './LoLMap.module.css'
import { LoLMapIcon } from "../../ui/LoLMapIcon/LoLMapIcon.tsx";
import map from './map.png'
import { IconMassive } from "./IconMassive.ts";




//В параметрах передаётся элемент из массива в файле 'IconMassive.ts'



export const LoLMap: React.FC = () => {

    return (

        <div className = {styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.map} style = {{backgroundImage: `url(${map})`}}>
                    {IconMassive.map(item => <div className={styles.icon} key = {item.role + item.red} style = {{right: item.left, top: item.top}}>
                        <LoLMapIcon role = {item.role} red = {item.red}></LoLMapIcon>
                    </div>)}
                </div>
            </div>
        </div>

    )

}