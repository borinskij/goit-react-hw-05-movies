import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
// import Movies from './pages/Movies/Movies';
// import MoviesDetalis from './pages/MovieDetails/MovieDetails';
// import Cast from './pages/Cast/Cast';
// import Reviews from './pages/Reviews/Reviews';
import { useEffect } from 'react';
import { getMovies } from './helpers/Api';

export const App = () => {
  useEffect(() => {
    const fetch = async () => {
      try {
        const fetchRezult = await getMovies();
        console.log('fetchRezult :', fetchRezult);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetch();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movies" element={<Movies />}>
          <Route path=":movieId" element={<MoviesDetalis />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route> */}
      </Routes>
    </>
  );
};
