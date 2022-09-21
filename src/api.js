export const API_URL = 'https://one-piece-api.p.rapidapi.com/api/characters';

export const apiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'one-piece-api.p.rapidapi.com'
  }
};

