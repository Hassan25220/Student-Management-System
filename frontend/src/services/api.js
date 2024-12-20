import axios from 'axios';


const Api_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: Api_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;