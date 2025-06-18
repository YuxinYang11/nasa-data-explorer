const axios = require('axios');

const BASE = 'https://api.nasa.gov';
const KEY = process.env.NASA_API_KEY;

async function fetchAPOD(date) {
  let url = `${BASE}/planetary/apod?api_key=${KEY}`;
  if (date) url += `&date=${date}`;
  const { data } = await axios.get(url);
  return data;
}


async function fetchMarsPhotos(earth_date) {
  const url = `${BASE}/mars-photos/api/v1/rovers/curiosity/photos`;
  const { data } = await axios.get(url, {
    params: { earth_date, api_key: KEY }
  });
  return data.photos;
}

async function fetchNeoWs(start_date, end_date) {
  const nasaKey = process.env.NASA_API_KEY;
  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${nasaKey}`;
  const res = await axios.get(url);
  return res.data;
}


module.exports = {
  fetchAPOD,
  fetchMarsPhotos,
  fetchNeoWs
};
