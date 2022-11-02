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
  return results;
};

export const getMovieId = async id => {
  const { data } = await instance.get(`/movie/${id}`, { params: {} });
  return data;
};
export const getCast = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`, { params: {} });

  return data;
};
export const getReviews = async id => {
  const { data: results } = await instance.get(`/movie/${id}/reviews`, {
    params: {},
  });
  return results;
};

export const getHero = async () => {
  const { data: results } = await instance.get(`trending/all/day`, {
    params: {},
  });
  console.log('reedwe23424sults :', results);
  return results;
};
