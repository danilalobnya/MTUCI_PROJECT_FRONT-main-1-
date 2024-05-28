import React from "react";

import { ImageContainer } from "../../img/ImageContainer.tsx";



interface CoursPictureProps {
    pictures: string[]
}


export const CoursPicture: React.FC<CoursPictureProps> = (props: CoursPictureProps) => {

    return (
        <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
            {props.pictures.map( (item, index) => <ImageContainer key = {index} height = {300} width={600} image = {item}/>)}
        </div>
    )

}