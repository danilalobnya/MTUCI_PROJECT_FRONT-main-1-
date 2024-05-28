import axios from 'axios'
import { redirect } from '../helpers/rediret.ts'

export interface LogInApiProps {
        username: string
        password: string
}

export const LogInApi = async (props: LogInApiProps) => {

    await axios.post('http://localhost:8000/login', {
        name: props.username,
        password: props.password,
    })
    .then(response => {
        if (response.status === 200) return 
            localStorage.setItem('accessToken', response.data.access)

            localStorage.setItem('refreshToken', response.data.refresh)

            redirect('http://localhost:3000/Main')
    })

    .catch(error => console.error(error))

}