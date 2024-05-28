import axios from 'axios'


export interface AuthApiProps {
        url: string
}

interface dataProps {
    text: string
    id: number
    cours_name: string
    ling: string
}

let data: dataProps

const AccesToken = localStorage.getItem('accessToken')


export const GetCours =  (props: AuthApiProps) => {
    axios.get(props.url, {headers: { Authorization: AccesToken }})
    .then(response => {
        if (response.status === 200) return (
            data = response.data
        )
    })

    .catch(error => console.error(error))
    return data
}