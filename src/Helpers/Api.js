import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '087b3a8cac1b0930cef8c04cbd521bfb',
    // include_adult: false,
  },
});

export const getMovies = async () => {
  const {
    data: { results },
  } = await instance.get('trending/all/day', { params: {} });
  return results;
};

export const searchDataGet = async query => {
  const {
    data: { results },
  } = await instance.get('search/movie', { params: { query } });
  console.log('results :', results);
  return results;
};

export const getMovieId = async movie_id => {
  const {
    data: { results },
  } = await instance.get('/movie', { params: { movie_id } });
  console.log('results :', results);
  return results;
};
