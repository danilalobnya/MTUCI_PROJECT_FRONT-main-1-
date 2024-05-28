import React from "react";
import styles from  './SignIn.module.css'

import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { PinInput  } from 'react-input-pin-code'

import { useAppDispatch, useAppSelector } from "../../../../hooks/redux.ts";
import { formSlice } from "../../../../store/reducers/RegistrationFormSlice.ts";

import { AuthApi } from "../../../../api/Auth.ts";
import { EmailVerifyApi } from "../../../../api/EmailVerify.ts";


export const SignIn: React.FC = () => {

    //Кнопка для отображения пароля
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    
    //Импорт redux для toogle элемента формы
    const {toogled} = useAppSelector(state => state.formReducer)
    const {swap} = formSlice.actions
    const dispatch = useAppDispatch()

    //Интерфейс данных
    interface formDataProps {
        username: string;
        email: string;
        password: string;
        password2: string;
    }

    const [formData, setFormData] = React.useState<formDataProps>({
        username: "",
        email: "",
        password: "",
        password2: ""
    })

    //Изменение formData при вписывании в поля input
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name
        const value = event.target.value
        setFormData(formData => ({...formData, [name]: value}))
    }

    //Функция для сброса формы при свапе формы
    const resetForm = () => {
        dispatch(swap())
        setVerify(false)
        setValues(['','','','','',''])
        setFormData(prevState => ({
            username: "",
            email: "",
            password: "",  
            password2: ""
        }))
    }



    const [verify, setVerify] = React.useState(false)

    const [values, setValues] = React.useState(['','','','','',''])


    return (

        <div className={styles.wrapper} style = {{position: 'absolute'}}> {/*Чтобы элементы авторизации не делили блок */}

            <div className={styles.toogleMenu} style = {{opacity: toogled ? '1' : '0'}}>
                <div className={styles.toogle} style = {{right: toogled ? '0%' : '100%'}}/>  {/*Анимация ухода блока при смене состояния*/}
            </div>

        
        
        <div className={styles.logInCaontainer} style={{opacity: toogled ? '1' : '0'}}> {/*Анимация ухода блока при смене состояния*/}

            <div className={styles.logIn} style = {{right: toogled ? '0%' : '100%', bottom: verify ? '100%' : '0%'}}> {/*Анимация ухода блока при смене состояния*/}
                <span className= {styles.title}>Рады видеть вас!</span>

                <input className={styles.inputName} name = "username" value={formData.username} onChange={handleChange} placeholder='Name'></input>
                <input className={styles.inputName} name = "email" value={formData.email} onChange={handleChange} placeholder='Email'></input>
                
                <div className = {styles.inputGroup}>
                    <input className={styles.inputPassword} name = "password" value={formData.password} onChange={handleChange}
                     type = {show ? '' : 'password'} placeholder="Password"></input>
                    <button className = {styles.showBtn} onClick={handleClick}>{show ? <IoIosEyeOff /> : <IoIosEye />}</button>
                </div>

                <div className = {styles.inputGroup}>
                    <input className={styles.inputPassword} name = "password2" value={formData.password2} onChange={handleChange} 
                    type = "password" placeholder="Repeat Password"></input>
                </div>

                <span className={styles.logInLink} onClick={() => resetForm()}>Уже есть аккаунт?</span> {/*Кнопка для свапа элементов*/}
                 
                <button disabled = {formData.email === '' || formData.password === '' || formData.password2 === '' || formData.username === '' ? true: false} 
                className={styles.logInBtn} onClick={() => AuthApi({Data: {username: formData.username, email: formData.email, password: formData.password, password2: formData.password2}, 
                Verify: () => setVerify(true)})}>Создать</button>
            </div>

            


            {/*Плашка верификации*/}

            {toogled ? 
            <div className = {styles.verifyMenu} style = {{top: verify ? '30%' : '140%'}}>
                <span className = {styles.emailTitle}>На ваш адрес {formData.email}<br/> было отправлено письмо для подтверждения</span>
                <PinInput 
                    values={values} 
                    placeholder = ''
                    type = 'text' 
                    onChange={(value, index, values) => setValues(values)} 
                    validBorderColor = '#30a68e'
                    inputStyle={{color: '#fbbb43'}}
                    containerStyle={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                    />
                <button onClick = {() => EmailVerifyApi({code: values.join(''), resetValues: () => resetForm()})} className = {styles.logInBtn} style={{width: '100px', height: '40px', marginTop: '10px', fontWeight: '700'}}>Отправить</button>
            </div>
            : <></>}

        </div> 
        
        
        
        </div> 



        

    )

}