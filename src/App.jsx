import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import MoviesDetalis from './pages/MovieDetails/MovieDetails';
import Cast from './pages/Cast/Cast';
import Reviews from './pages/Reviews/Reviews';
import { useEffect, useState } from 'react';
import { getMovies } from './Helpers/Api';
import { Header } from 'components/Header/Header';

export const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState([]);
  // const [searchData, setSaerchData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchRezult = await getMovies();
        setData(fetchRezult);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Header setQuery={setQuery} />
      <Routes>
        <Route path="/" element={<Home data={data} />} />

        <Route path="/movies" element={<Movies query={query} />}>
          <Route path="/movies/:movieId" element={<MoviesDetalis />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  );
};
