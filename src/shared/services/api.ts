import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? process.env.EXPO_HOST
      : process.env.API_HOST,
});

export default api;
