import axios from 'axios'

const baseURL = "https://desolate-springs-46629.herokuapp.com/api";
// const baseURL = "https://ac-simple-twitter-api.herokuapp.com/api";


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
