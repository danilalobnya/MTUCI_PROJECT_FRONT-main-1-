import React from 'react'
import './ImageContainer.css'


export interface ImageContainerProps {
    image: string
    height: number;
    width: number;
}

export const ImageContainer: React.FC<ImageContainerProps> = (props: ImageContainerProps) => {


    return (
            <div className='imageContainer' style = {{width: props.width, height: props.height}}>
                <div className='ramka' style = {{height: props.height - 10, width: props.width - 10}}/>
                    <img src={props.image} className='image' style = {{height: props.height - 10, width: props.width - 10}} />
                <div />
            </div> 
    )
    
}  