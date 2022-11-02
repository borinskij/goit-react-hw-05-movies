import { getMovieId } from 'services/Api';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';
// import PropTypes from 'prop-types'

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchData = async () => {
      try {
        const searchRezult = await getMovieId(movieId);
        setMovie(searchRezult);
      } catch (error) {
        console.log(error.message);
      }
    };
    searchData();
  }, [movieId]);

  const {
    original_title,
    genres,
    overview,
    popularity,
    release_date,
    poster_path,
  } = movie;
  const urlImg = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const genr = genres?.map(e => e.name).join(', ');
  return (
    <>
      <Link className={css.button} to={location.state?.from ?? '/'}>
        Вертайся
      </Link>
      <div className={css.movieDetails}>
        <img src={urlImg} alt="" width="280px" />
        <h2>{original_title} </h2>
        <p>
          <span className={css.paragraph}>Огляд:</span> {overview}
        </p>
        <p>
          <span className={css.paragraph}>Жарн:</span> {genr}
        </p>
        <p>
          <span className={css.paragraph}> Популярність: </span> {popularity}
        </p>
        <p>
          <span className={css.paragraph}>Реліз: </span>
          {release_date}
        </p>
        <Link
          to={`/movies/${movieId}/cast`}
          state={{ from: location?.state?.from }}
          className={css.link}
        >
          Актори
        </Link>

        <Link
          to={`/movies/${movieId}/reviews`}
          state={{ from: location?.state?.from }}
          className={css.link}
        >
          Огляд
        </Link>
        <Outlet />
      </div>
    </>
  );
}

// MovieDetails.propTypes = {}

export default MovieDetails;
