import React from 'react';
import styles from './LoL.module.css'
import { Header } from '../../modules/Header/Header.tsx';
import { RegistrationForm } from '../../modules/RegistrationForm/RegistrationForm.tsx';
import { useAppSelector } from '../../hooks/redux.ts';
import { VideoContainer } from '../../components/VideoCantainer/VideoContainer.tsx';
import video from './MPContent/serega.mp4'
import { Carousel } from '../../components/Carousel/Carousel.tsx';
import { firstChampsPack } from '../../components/Carousel/CarouselItem/CarouselPictures/firstChampsPack.tsx';
import { secondChampsPack } from '../../components/Carousel/CarouselItem/CarouselPictures/secondChampsPack.tsx';
import { thirdChampsPack } from '../../components/Carousel/CarouselItem/CarouselPictures/thirdChamsPack.tsx';
import { TextBlock } from '../../components/TextBlock/TextBlock.tsx';
import { LoLMap } from '../../components/LoLMap/LoLMap.tsx';
import { CoursBlock } from '../../components/CoursBlock/LoLCoursBlock.tsx';
import { CoursItems } from '../../components/CoursBlock/CoursItems.ts';


const description = "От новичка до мастера в \nLeague of Legends: \nпройди этот путь вместе c\nнами"
const descriptione2 = 'В игре более 140 чемпионов, так что вы точно найдете героя под свой стиль игры.\nНаучитесь играть одним или сразу всеми.'
const description3 = "Большая и разнообразная карта с множеством активностей"
const description4 = "Мы предоставляем широкий выбор курсов в зависимости от вашей цели"





export const LoL: React.FC = () => {


    

    const {display} = useAppSelector(state => state.registrationReducer)
    

    return (
    
        <div className = {styles.wrapper}>
            {display ? <RegistrationForm/> : ''}
            <Header/>
            <VideoContainer description = {description} videoUrl={video}/>
            <TextBlock height='200px' decsription={descriptione2}/>
            <Carousel items={firstChampsPack} speed = {40} side = 'left'/>
            <Carousel items={secondChampsPack} speed = {60} side = 'rigth'/>
            <Carousel items={thirdChampsPack} speed = {50} side = 'left'/>
            <TextBlock height='120px' decsription={description3}/>
            <LoLMap/>
            <TextBlock decsription={description4} height='100px'/>
            <CoursBlock dota = {false} items={CoursItems}/>
        </div>

    )   
}