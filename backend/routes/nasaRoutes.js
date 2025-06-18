const express = require('express');
const { fetchAPOD, fetchMarsPhotos, fetchNeoWs } = require('../services/nasaService');

const router = express.Router();

router.get('/apod', async (req, res) => {
  try {
    const { date } = req.query;             
    const data = await fetchAPOD(date);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get('/mars', async (req, res) => {
  try {
    const { earth_date = '2025-06-01' } = req.query;
    const data = await fetchMarsPhotos(earth_date);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get('/neo', async (req, res) => {
  try {
    const { start_date, end_date } = req.query;
    const data = await fetchNeoWs(start_date, end_date);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
