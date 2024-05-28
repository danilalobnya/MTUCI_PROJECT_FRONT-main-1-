import React from 'react';
import styles from './RegistrationForm.module.css'
import { LogIn } from './Components/LogIn/LogIn.tsx';
import { SignIn } from './Components/SignIn/SignIn.tsx';
import { registrationSlice } from '../../store/reducers/RegistrationSlice.ts';
import { useAppDispatch } from '../../hooks/redux.ts';
import useRemoveForm from '../../hooks/removeForm.ts';
import  {animate, motion} from "framer-motion"


export const RegistrationForm: React.FC = () => {

    //Импорт redux для закрытия формы
    const {regClose} = registrationSlice.actions
    const dispatch = useAppDispatch()

    //Привязка хука к форме
    let ref = React.createRef<HTMLDivElement>()
    useRemoveForm(ref, () => dispatch(regClose()))

    return (
    
        <motion.div className = {styles.wrapper} initial = {{opacity:0}} animate = {{opacity: 1}} transition={{duration: 0.2}}>
            <div className= {styles.container} ref  = {ref}>
                
                <SignIn/>
                <LogIn/>
            </div>
        </motion.div>

    )
}