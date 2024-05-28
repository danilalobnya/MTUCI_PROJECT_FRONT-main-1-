import axios from "axios";


export const updateTokens = async () => {

    await axios.post('api/token/update', { refresh: localStorage.getitem('refreshToken')})
  
    .then(response => {
  
        const newAccessToken = response.data.access;
  
        const newRefreshToken = response.data.refresh;
  
        localStorage.setItem('accessToken', newAccessToken)
  
        localStorage.setItem('refreshToken', newRefreshToken)
  
     
  
    })
  
    .catch(error => {
  
        console.error('Ошибка при обновлении токена:', error);
  
    })
  
  } 