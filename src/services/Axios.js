import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tiktok-backend-mern-krd.herokuapp.com/'
})

export default instance;