// src/api.js
import axios from 'axios';

const swapiRequest = async (apiLink) => {
  try {
    const response = await axios.get(apiLink);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default swapiRequest;
