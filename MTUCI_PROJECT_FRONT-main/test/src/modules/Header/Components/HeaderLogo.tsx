import React from 'react';
import styles from './Components.module.css'
import logo from './Images/logo.png'
import title from './Images/title.png'
import { redirect } from '../../../helpers/rediret.ts';


export const HeaderLogo: React.FC = () => {


    return (
    
            <div className = {styles.logoContainer} onClick={() => redirect('http://localhost:3000/Main')}>
                <img className= {styles.logo} alt = 'logo.png' src={logo}/>
                <img className= {styles.title} alt = 'logo.png' src={title}/>
            </div>

    )
}