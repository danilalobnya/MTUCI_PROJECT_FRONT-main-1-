import React from 'react'
import styles from './Components.module.css'


export interface IconProps {
    text: string,
    image: any
}

export const Icon: React.FC<IconProps> = (props: IconProps) => {


    return (
            <div className={styles.wrapper}>
                <p className={styles.lowertext}>{props.text}</p>
                <div className={styles.circle} >
                    <img className={styles.image} src={props.image}/>
                </div>
            </div>

    )
}