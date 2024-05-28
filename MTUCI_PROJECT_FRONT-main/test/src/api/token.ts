import axios from 'axios'
import { json } from 'react-router'



const token: any = JSON.parse(localStorage.getItem("access") || "") 
const refreshToken: any = JSON.parse(localStorage.getItem("refresh") || "")

const baseUrl: string = "http://localhost:8000/api/v1"



export const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {Authorization: `Bearer ${token}` || null}
})


