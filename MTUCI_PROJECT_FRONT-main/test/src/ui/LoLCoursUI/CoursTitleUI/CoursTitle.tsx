import React from "react";
import leftWing from './leftWing.png'
import rigthWing from './rigthWing.png'





interface CoursTitleProps {
    title: string
}



export const CoursTitle: React.FC<CoursTitleProps> = (props: CoursTitleProps) => {

    return (
        <div style = {{width: '600px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{width: '150px', height: '60px', backgroundImage: `url(${leftWing})`, backgroundSize: 'cover'}}/>
            <span style = {{margin: '10px', height: '20px', fontWeight: '700', fontSize: '25px', color: '#fff', lineHeight: '30px', textAlign: 'center'}}>{props.title}</span>
            <div style={{width: '150px', height: '60px', backgroundImage: `url(${rigthWing})`, backgroundSize: 'cover'}}/>
        </div>
    )

}