import React from 'react';
import styles from './VideoContainer.module.css'


export interface VideoContainerProps {
    description: string
    videoUrl: string
}


export const VideoContainer: React.FC<VideoContainerProps> = ({description, videoUrl} : VideoContainerProps) => {
    

    return (
    
        <div className = {styles.wrapper} >
            <video className = {styles.backVideo} autoPlay loop muted><source src={videoUrl} type="video/mp4"/>
            </video>
            <span className = {styles.description} >{description}</span>
        </div>

    )   
}