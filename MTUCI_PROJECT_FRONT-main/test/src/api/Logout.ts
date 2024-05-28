import axios from 'axios'


export const LogOut = async () => {

    await axios.post('url', {

        refresh_token: localStorage.getItem('refreshToken'),

    })

    .then(response => {

        if (response.status === 200) return

        localStorage.removeItem('accessToken');

        localStorage.removeItem('refreshToken');

    })

    .catch(error => console.error(error))

}