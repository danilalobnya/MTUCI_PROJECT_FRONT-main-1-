import axios from 'axios'





export interface AuthApiProps {
    Data: {
        username: string
        email: string
        password: string
        password2: string
    },
    Verify: () => void
}

export const AuthApi = async (props: AuthApiProps) => {

    await axios.post('http://localhost:8000/registr', {
        name: props.Data.username,
        email: props.Data.email,
        password: props.Data.password,
        password2: props.Data.password2,
    })
    .then(response => {
        console.log(response)
        if (response.status === 201) return 
        props.Verify()

    })

    .catch(error => {
        console.error(error)
    })

}