import axios from 'axios';

const api = axios.create({
  baseURL: 'http://argusapp.gabrielmoura.website',
});

export default api;
