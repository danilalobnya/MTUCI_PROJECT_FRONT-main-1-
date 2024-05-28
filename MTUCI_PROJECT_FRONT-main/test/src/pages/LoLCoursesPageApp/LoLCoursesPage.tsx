import React from 'react'

import { GetCours } from '../../api/GetCours.ts'

import styles from './LoLCoursesPage.module.css'
import { CoursTitle } from '../../ui/LoLCoursUI/CoursTitleUI/CoursTitle.tsx'
import { CoursBlockText } from '../../ui/LoLCoursUI/CoursTextBlock/CoursBlockText.tsx'
import { CoursSubTitle } from '../../ui/LoLCoursUI/CoursSubTitle/CoursSubTitle.tsx'
import { CoursPicture } from '../../ui/LoLCoursUI/CoursPictures/CoursPicture.tsx'

import { SVGmassive } from './GifsAndImages/GifsAndImages.ts'

import { Header } from '../../modules/Header/Header.tsx'
import { RegistrationForm } from '../../modules/RegistrationForm/RegistrationForm.tsx'
import { useAppSelector } from '../../hooks/redux.ts';



export interface LoLCoursesProps {
    coursName: string,
    pageNumber: string,
}




export const LoLCourses: React.FC<LoLCoursesProps> = (props: LoLCoursesProps) => {

    const data = GetCours({url:'http://localhost:8000/' + 'lol/' + props.coursName + '/' + props.pageNumber})

    const {display} = useAppSelector(state => state.registrationReducer)

    const text: string[] = data === undefined ? 'AHAHAHA \n SAASASASAS \n FRFRFFR \n HEHEHEHEH \n sdfsdf \n 22222 \n 33333 \n 44444 \n 5555555'.split('\n') : data.text.split('\n')

    return(
        <div className = {styles.wrapper}>
            {display ? <RegistrationForm/> : ''}
            <Header/>
            <CoursTitle title = {text[0]}></CoursTitle>
            <CoursBlockText width = '80%' height='200px' text = {text[1]}/>
            <CoursSubTitle title = {text[2]}/>
            <CoursBlockText width = '80%' height='200px' text = {text[3]}/>
            <CoursPicture pictures={SVGmassive.imagesBlock1}/>
            <CoursBlockText width = '80%' height='150px' text = {text[4] + '\n\n' + text[5]}/>
        </div>
    )

}