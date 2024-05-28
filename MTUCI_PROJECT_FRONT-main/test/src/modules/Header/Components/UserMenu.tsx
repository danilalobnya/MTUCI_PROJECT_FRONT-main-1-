import React from 'react';
import styles from './Components.module.css'
import { RiSettings3Fill } from "react-icons/ri";
import { Boop } from '../../../helpers/settingIconBoop.tsx';

export const UserMenu: React.FC = () => {

    const lvl = localStorage.getItem('lvl')//Отображение уровня пользователя из бд
    //Функция boop для анимации при наведении

    return (
    
            <div className = {styles.userMenuContainer}>
                <div className={styles.avatar}/>
                <div className={styles.userLevel}><text>{lvl ? lvl : '?'}</text></div>
                {Boop({rotation: 30, timing: 200, children: <RiSettings3Fill className={styles.settingBtn}></RiSettings3Fill >})}
            </div>

    )
}