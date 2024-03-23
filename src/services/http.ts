import axios from 'axios';

const http = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVICE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

export default http