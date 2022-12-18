import axios from 'axios'

// const baseURL = "https://desolate-springs-46629.herokuapp.com/api";
const baseURL = "http://localhost:3000/api";


const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')

    if(token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error)
)

export const apiHelper = axiosInstance;
