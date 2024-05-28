import React from 'react';
import styles from './Dota.module.css'
import { Header } from '../../modules/Header/Header.tsx';
import { VideoContainer } from '../../components/VideoCantainer/VideoContainer.tsx';
import { Banner1 } from '../../modules/DotaPage/Banner1.tsx';
import { Banner2 } from '../../modules/DotaPage/Banner2.tsx';
import { Banner3 } from '../../modules/DotaPage/Banner3.tsx';
import { CoursBlock } from '../../components/CoursBlock/LoLCoursBlock.tsx';
import video from './MPContent/serega.mp4'
import { RegistrationForm } from '../../modules/RegistrationForm/RegistrationForm.tsx';
import { Links } from '../../modules/MainPage/Components/Links.tsx';
import { CoursItemsDota } from '../../components/CoursBlock/CoursItems.ts';
import { useAppSelector } from '../../hooks/redux.ts';



export const Dota: React.FC = () => {

    const {display} = useAppSelector(state => state.registrationReducer)

    return (
    
        <div className={styles.dotapage}>
            {display ? <RegistrationForm/> : ''}
            <Header />
            <VideoContainer description='Представляем блок курсов по dota 2' videoUrl={video}/>
            <Banner1 />
            <CoursBlock dota = {true} items = {CoursItemsDota}/>
            <Banner2 />
            <Banner3 />
            <Links />
        </div>

    )   
}