import React from 'react'
import './VideoContainer.css'


export interface VideoContainerProps {
    video: string
}

export const VideoContainer: React.FC<VideoContainerProps> = (props: VideoContainerProps) => {

    return (
            <div className='videoContainer'>
                <div className='ramka'/>
                    <video src={props.video} controls autoPlay muted loop className='video'></video>
                <div />
            </div> 
    )
    
}