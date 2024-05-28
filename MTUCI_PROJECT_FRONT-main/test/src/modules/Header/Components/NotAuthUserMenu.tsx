import React from 'react';
import styles from './Components.module.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { registrationSlice } from '../../../store/reducers/RegistrationSlice.ts';
import LoL from './Images/LoL.png'
import Dota from './Images/Dota.png'
import { IoIosLogIn } from "react-icons/io";
import { useAppDispatch } from '../../../hooks/redux.ts';
import { redirect } from '../../../helpers/rediret.ts';


export const NotAuthUserMenu: React.FC = () => {

    const {regOpen} = registrationSlice.actions
    const dispatch = useAppDispatch()

    const [open, setOpen] = React.useState(false)


    return (
    
            <div className = {styles.userMenuContainer}>
                <button className={styles.authBtn} onClick={() => dispatch(regOpen())}>Войти</button>
                <RxHamburgerMenu className = {styles.burgerMenu} onClick={() => setOpen(!open)}/>
                <div className = {open ? styles.userMenuOpen : styles.userMenuClose}>
                    <div className = {styles.coursNav} id ={styles.dota} onClick={() => redirect('http://localhost:3000/Dota')}>
                        <img className = {styles.gameIcon} src = {Dota} alt = 'Dota'/>
                    </div>
                    <div className = {styles.coursNav} id = {styles.LoL}  onClick={() => redirect('http://localhost:3000/LoL')}>
                        <img className = {styles.gameIcon} src = {LoL} alt = 'LoL'/>
                    </div>
                    <div className = {styles.authNav} onClick={() => {dispatch(regOpen()); setOpen(false)}}><IoIosLogIn style={{width: '40px', height: '40px', color: 'gray'}}/></div>
                </div>
            </div>

    )
}