import axios from 'axios';

const BASE_URL =
  'https://song-discovery-by-nahom-9e5e4e24a578.herokuapp.com/api';
const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
