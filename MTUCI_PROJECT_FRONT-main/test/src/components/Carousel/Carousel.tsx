import React from 'react';
import styles from './Carousel.module.css'
import { CarouselItem } from './CarouselItem/CarouselItem.tsx';
import  {animate, motion, useMotionValue} from "framer-motion"
import useMeasure from "react-use-measure"


//В папке './CarouselItem' находятся импорты массивов изображений


export interface Item {
    image: JSX.Element,
    name: string
}

export interface CarouselProps {
    items: Item[],
    speed: number,
    side: string
}



export const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
    

    const [ ref, {width} ] = useMeasure()
    
    const xTranslation = useMotionValue(0);

    //Анимация карусели
    React.useEffect(() => {
        const len: number = props.items.length
        var speed: number = props.speed
        let controls: any;
        let finalPosition: number =  -width * len 

        controls = animate(xTranslation, props.side === 'left' ?  [0, finalPosition] : [finalPosition, 0],{
            ease: 'linear',
            duration: speed,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
        })
        
    }, [xTranslation, width, props.side, props.speed, props.items.length])


    return (
    

    <div className = {styles.wrapper} >
        <div className = {styles.container}>
            <div className={styles.leftShadow}/>
            <div className={styles.carouselContainer}>
                {props.items.map(item => <motion.li ref = {ref} key = {item.name} style = {{x: xTranslation}}><CarouselItem image = {item.image} name = {item.name} /></motion.li>)}
                {props.items.map(item => <motion.li ref = {ref} key = {item.name} style = {{x: xTranslation}}><CarouselItem image = {item.image} name = {item.name} /></motion.li>)}  
            </div>
            <div className={styles.rigthShadow}/>
        </div>
    </div>

    )   
}