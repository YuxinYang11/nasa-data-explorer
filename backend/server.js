const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/.env' });
const express = require('express');
const cors = require('cors');
const nasaRoutes = require('./routes/nasaRoutes');
//console.log('NASA_API_KEY:', process.env.NASA_API_KEY);
//For debugging
globalThis.fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();

app.use(cors());
app.use('/api', nasaRoutes);

globalThis.fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const aiRoutes = require('./routes/aiRoutes');
app.use(express.json()); 
app.use('/api/ai', aiRoutes);
//console.log(process.env.OPENAI_API_KEY)
//For debugging

const PORT = process.env.PORT || 5000;
    
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Backend listening on http://localhost:${PORT}`);
  });
}

module.exports = app;
