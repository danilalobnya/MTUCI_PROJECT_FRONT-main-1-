import React from 'react';
import styles from './Header.module.css'
import { HeaderLogo } from './Components/HeaderLogo.tsx';
import { PagesIcons } from './Components/PagesIcons.tsx';
import { UserMenu } from './Components/UserMenu.tsx';
import { NotAuthUserMenu } from './Components/NotAuthUserMenu.tsx';



export const Header: React.FC = () => {



    return (
    
        

        <div className = {styles.wrapper} >
            <HeaderLogo/>
            <PagesIcons/>
            {localStorage.getItem('access') ? <UserMenu/> : <NotAuthUserMenu/>}
        </div>

    )
}