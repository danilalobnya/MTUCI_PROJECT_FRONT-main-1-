import React from "react";
import styles from  './LogIn.module.css'
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux.ts";
import { formSlice } from "../../../../store/reducers/RegistrationFormSlice.ts";
import { LogInApi } from "../../../../api/LogIn.ts";

export const LogIn: React.FC = () => {
    
    //Отображение пароля
    const [show, setShow] = React.useState(false) 
    const handleClick = () => setShow(!show)
    
    //Импорт redux для toogle элементов
    const {toogled} = useAppSelector(state => state.formReducer)
    const {swap} = formSlice.actions
    const dispatch = useAppDispatch()

    //Интерфейс данных
    interface formDataProps {
        username: string;
        password: string;
    }


    const [formData, setFormData] = React.useState<formDataProps>({
        username: "",
        password: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name
        const value = event.target.value
        setFormData(formData => ({...formData, [name]: value}))
    }

    //Ресет формы при смене toogle элементов
    const resetForm = () => {
        dispatch(swap())
        setFormData(prevState => ({
            username: "",
            password: ""
        }))
    }


    return (

        <div className={styles.wrapper} >
            
        <div className={styles.logInCaontainer} style={{opacity: toogled? '0' : '1'}}>
            <div className={styles.logIn} style = {{left: toogled ? '100%' : '0%'}}>
                <span className= {styles.title}>Рады видеть вас!</span>

                <input className={styles.inputName} name = "username" placeholder='Name' value={formData.username} onChange={handleChange}></input>

                <div className = {styles.inputGroup}>
                    <input className={styles.inputPassword} name = "password" value={formData.password} onChange={handleChange}
                     type = {show ? '' : 'password'} placeholder="Password"></input>
                    <button className = {styles.showBtn} onClick={handleClick}>{show ? <IoIosEyeOff /> : <IoIosEye />}</button>
                </div>

                <span className={styles.forgetPass}>Забыли пароль</span>

                <span className={styles.logInLink} onClick={() => resetForm()}>Зарегестрироваться</span>

                <button className={styles.logInBtn} onClick={() => LogInApi(formData)}>Войти</button>
            </div>
        </div>   

            <div className={styles.toogleMenu}>
                <div className={styles.toogle} style = {{left: toogled ? '100%' : '0%', opacity: toogled ? '0' : '1'}}>
                </div>
            </div>

        </div>

    )

}