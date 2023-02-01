import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5012/'
    
})

export default instance