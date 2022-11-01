// import { getTitle } from 'components/Helpers/Api';
// import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import css from './Hero.module.css';

function Hero({ data }) {
  //   const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  //   console.log('data.poster_path :', data.poster_path);
  //   if (data.length === 0) {
  //     return;
  //   }
  const dataHero =
    'https://image.tmdb.org/t/p/w500//z2yahl2uefxDCl0nogcRBstwruJ.jpg';
  console.log('dataHero :', dataHero);

  return (
    <div
      className={css.heroTitle}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w500//z2yahl2uefxDCl0nogcRBstwruJ.jpg")`,
      }}
    >
      {/* <img src={dataHero} alt="ms" /> */}
    </div>
  );
}

// Hero.propTypes = {};

export default Hero;
