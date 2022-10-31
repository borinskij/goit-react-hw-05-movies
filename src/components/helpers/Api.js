import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/all/day?',

  params: {
    api_key: '087b3a8cac1b0930cef8c04cbd521bfb',
    // query: '',
    // page: 1,
  },
});

export const getMovies = async () => {
  const { data } = await instance.get('', { params: {} });
  console.log('data :', data);
  return data;
};

// https://api.themoviedb.org/3/trending/all/day?api_key=087b3a8cac1b0930cef8c04cbd521bfb
