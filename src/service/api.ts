import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-rcky.herokuapp.com/',
});

export default api;