import React from 'react'
import { Icon } from './Icon.tsx'
import styles from './Components.module.css'
import lowericon1 from './Images/lowericon1.png'
import lowericon2 from './Images/lowericon2.png'
import lowericon3 from './Images/lowericon3.png'
import lowericon4 from './Images/lowericon4.png'

export const LowerIcons: React.FC = () => {


    return (

            <div className={styles.iconbox}>
                <Icon text='Система опыта' image={lowericon1}/>
                <Icon text='Активное комьюнити' image={lowericon2}/>
                <Icon text='Всё для каждого' image={lowericon3}/>
                <Icon text='Отзывчивая поддержка' image={lowericon4}/>
            </div>

    )
}