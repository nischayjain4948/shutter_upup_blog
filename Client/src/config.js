import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL : "localhost:5000/api/",
})

