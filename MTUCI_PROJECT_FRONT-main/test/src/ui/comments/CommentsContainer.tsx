import React from 'react'
import './CommentsContainer.css'


export interface CommentsContainerProps {
    text: string
    height: number;
    width: number;
    size: string;
}

export const CommentsContainer: React.FC<CommentsContainerProps> = (props: CommentsContainerProps) => {


    return (
            <div className='commentsContainer' style = {{width: props.width, height: props.height}}>
                <div className='ramka' style = {{height: props.height, width: props.width}}/>
                    <p className='text' style = {{height: props.height - 10, width: props.width - 10, fontSize: props.size}}>
                        {props.text}
                    </p>
                <div />
            </div> 
    )
    
}  