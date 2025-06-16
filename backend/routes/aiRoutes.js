const express = require('express');
const router = express.Router();
const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.post('/apod-summary', async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'No text provided' });
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are an expert science communicator who explains astronomy in a simple, fun, and engaging way.',
        },
        {
          role: 'user',
          content: `Please summarize the following astronomy explanation in plain, friendly English (less than 100 words), avoiding jargon:\n${text}`,
        },
      ],
      max_tokens: 150,
      temperature: 0.7,
    });
    const summary = completion.choices[0].message.content;
    res.json({ summary });
  } catch (e) {
    console.error('OpenAI error:', e?.response?.data || e.message || e);
    res.status(500).json({ error: e.message });
  }
});


module.exports = router;
