import React from 'react';
import styles from './Components.module.css'
import LoL from './Images/LoL.png'
import Dota from './Images/Dota.png'
import { redirect } from '../../../helpers/rediret.ts';


export const PagesIcons: React.FC = () => {


    return (
    
            <div className = {styles.iconsContainer}>
                <div className = {styles.dotaContainer} onClick={() => redirect('http://localhost:3000/Dota')}>
                    <img alt = 'DotaIcon'  src = {Dota} />
                </div>
                <div className= {styles.lolContainer} onClick={() => redirect('http://localhost:3000/LoL')}>
                    <img alt = 'LoLIcon' src = {LoL} />
                </div>
            </div>

    )
}