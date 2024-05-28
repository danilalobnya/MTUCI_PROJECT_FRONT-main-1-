import React from 'react';
import styles from './../../modules/MainPage/Components/Components.module.css';
import { Header } from './../../modules/Header/Header.tsx';
import { UpperText } from '../../modules/MainPage/Components/Uppertext.tsx';
import { MainText } from '../../modules/MainPage/Components/MainText.tsx';
import { UpperIcons } from '../../modules/MainPage/Components/UpperIcons.tsx';
import { LowerIcons } from './../../modules/MainPage/Components/LowerIcons.tsx';
import { Links } from './../../modules/MainPage/Components/Links.tsx';
import { News } from './../../components/NewsCarousel/News.tsx'
import { useAppSelector } from '../../hooks/redux.ts';
import { RegistrationForm } from '../../modules/RegistrationForm/RegistrationForm.tsx';


export const Main: React.FC = () => {

    const {display} = useAppSelector(state => state.registrationReducer)

    return (
    
        <div className={styles.mainpage}>
            {display ? <RegistrationForm/> : ''}
            <Header />
            <UpperText />
            <News />
            <MainText />
            <UpperIcons />
            <LowerIcons />
            <Links />
        </div>

    )   
}