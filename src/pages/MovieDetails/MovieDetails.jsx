import { getMovieId } from 'Helpers/Api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types'

function MovieDetails() {
  const { movieId } = useParams();
  console.log('movieId :', movieId);
  const [movie, setMovie] = useState({});
  console.log('movie :', movie);

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

  console.log('movie :>> ', movie);
  return <div>{movieId}</div>;
}

// MovieDetails.propTypes = {}

export default MovieDetails;
