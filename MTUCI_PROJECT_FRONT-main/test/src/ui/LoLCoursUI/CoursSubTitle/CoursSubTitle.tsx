import React from "react";
import SubLine from './SubLine.png'




export interface CoursSubTitleProps {
    title: string
}

export const CoursSubTitle: React.FC<CoursSubTitleProps> = (props: CoursSubTitleProps) => {

    return (

        <div style = {{width: '100%', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
            <div style={{marginLeft: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                <span style = {{width: '300px', height: '40px', fontSize: '25px', fontWeight: 700, color: '#fff'}}>{props.title}</span>
                <img src = {SubLine} alt = 'SubLine' style={{width: '400px', height: '40px'}}/>
            </div>
        </div>

    )
}