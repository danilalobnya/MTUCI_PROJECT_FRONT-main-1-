import axios from 'axios'


export interface AuthApiProps {
        code: string
        resetValues: () => void
}

export const EmailVerifyApi = async (props: AuthApiProps) => {
    await axios.post('http://localhost:8000/verify', {
        code: props.code
    })
    .then(response => {
        console.log(response)
        if (response.status === 200) return 
            console.log('success')
            props.resetValues()
    })

    .catch(error => console.error(error))

}