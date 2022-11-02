import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Galerry.module.css';
import PropTypes from 'prop-types';

const Galerry = ({ data }) => {
  const location = useLocation();

  function onClick(a) {
    return;
  }
  return (
    <ul className={css.gallery}>
      {data?.map(elem => {
        const urlImg = `https://image.tmdb.org/t/p/w500/${elem.poster_path}`;
        return (
          <Link
            to={`/movies/${elem.id}`}
            key={elem.id}
            state={{ from: location }}
          >
            <li className={css.galleryItem} onClick={() => onClick(elem.id)}>
              <img
                src={urlImg}
                alt={elem.original_title}
                className={css.galleryImage}
              />
              <span className={css.reiring}>
                {elem.vote_average || elem.popularity}
              </span>
              <h3 className={css.title}>{elem.original_title || elem.name}</h3>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

Galerry.propTypes = { data: PropTypes.arrayOf(PropTypes.object) };

export default Galerry;
