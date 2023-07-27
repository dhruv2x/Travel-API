const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv'); // Import dotenv

dotenv.config(); // Load environment variables from .env file
const app = express();
app.use(bodyParser.json());

const apiKey = process.env.OPENAI_API_KEY; // Access the API key from environment variables
const apiUrl = 'https://api.openai.com/v1/chat/completions';
const accessToken = `Bearer ${apiKey}`;

// Enable CORS for all requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'POST');
    return res.status(200).json({});
  }
  next();
});

app.post('/chatgpt_api', async (req, res) => {
  const { destination, duration } = req.body;

  // Generate trip itinerary
  const message = `You are a trip planner. I'm travelling to ${destination} for ${duration}. Plan a day-by-day travel itinerary with famous locations and hotels. I'm a traveller, so suggest some unique destinations and tips. Also, suggest some great food along the way.`;

  try {
    const body = {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a user.' },
        { role: 'user', content: message },
      ],
      max_tokens: 450,
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    };

    const response = await axios.post(apiUrl, body, { headers });
    const parsedResponse = response.data;

    if (!parsedResponse.choices || !parsedResponse.choices[0].message.content) {
      return res.status(500).json({ error: 'Invalid API response' });
    }

    const reply = parsedResponse.choices[0].message.content;
    return res.status(200).json({ event_description: reply });
  } catch (error) {
    console.error('Error calling ChatGPT API:', error.message);
    return res.status(500).json({ error: 'Error calling ChatGPT API' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
