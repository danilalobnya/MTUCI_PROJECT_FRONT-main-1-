import React from 'react'
import styles from './Components.module.css'


export interface BannerProps {
    text: string
}

export const Banner1: React.FC<BannerProps> = (props: BannerProps) => {


    return (
            <div className={styles.uppercontainer}>
                <p className={styles.uppertext}>{props.text}</p>
            </div>

    )
}