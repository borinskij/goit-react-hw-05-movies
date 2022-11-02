import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { lazy, Suspense } from 'react';
import { Header } from 'components/Header/Header';
import NotFound from 'pages/NotFound/NotFound';

const Movies = lazy(() => import('./pages/Movies/Movies'));
const MoviesDetalis = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./pages/Cast/Cast'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews'));
const Hero = lazy(() => import('components/Hero/Hero'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Hero />} />
          </Route>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/" element={<MoviesDetalis />}>
            <Suspense fallback={<div>Loading...</div>}>
              <Route path="/movies/:movieId/cast" element={<Cast />} />
              <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            </Suspense>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
