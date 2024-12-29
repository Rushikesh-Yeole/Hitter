const axios = require('axios');

const frontendUrl = 'https://kiwi-client.onrender.com';
const backendUrl = 'https://kiwi-production.up.railway.app';

const pingServer = async (url) => {
  try {
    await axios.get(url);
    console.log(`Successfully pinged ${url}`);
  } catch (error) {
    console.error(`Failed to ping ${url}:`, error.message);
  }
};

pingServer(frontendUrl);  
pingServer(backendUrl);