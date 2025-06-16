// frontend/src/services/nasaApi.js
import axios from 'axios';

export const getAPOD = () => axios.get('/api/apod').then(res => res.data);
export const getMarsPhotos = (date) =>
  axios.get('/api/mars', { params: { earth_date: date } }).then(res => res.data);
export const getNeoWs = () =>
  axios.get('/api/neo').then(res => res.data);
