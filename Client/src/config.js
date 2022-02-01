import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL : "https://shutterupp.herokuapp.com/api/",
})

