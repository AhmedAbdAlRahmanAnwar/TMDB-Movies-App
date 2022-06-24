import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "656074e50436cc419dbcd41bbcbcd5df",
        language: "en-US"
    }
})

export default axiosInstance;