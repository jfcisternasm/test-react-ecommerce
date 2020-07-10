import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://www.amiiboapi.com/api/'
    //baseURL: 'http://localhost:1340/'
});

export default axiosInstance;