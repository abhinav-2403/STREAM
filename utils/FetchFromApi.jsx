import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '6004da93ebmsha19b0f65a1f655fp158937jsn346b9e233fd8',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const FetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};