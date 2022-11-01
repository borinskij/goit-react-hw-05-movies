// import { Header } from 'components/Header/Header';
// import { getSearch } from 'Helpers/Api';
import Galerry from 'components/Galerry/Galerry';
import { searchDataGet } from 'Helpers/Api';
import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import css from './Movies.module.css';

const Movies = ({ query }) => {
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    const searchData = async () => {
      try {
        const searchRezult = await searchDataGet(query);
        setSearchData(searchRezult);
      } catch (error) {
        console.log(error.message);
      }
    };
    searchData();
    // setQuery('');
  }, [query]);
  const qwe = <h2>Мерші до пошуку </h2>;

  return <>{{ qwe } && { query } && <Galerry data={searchData} />}</>;
};

// Movies.propTypes = {};

export default Movies;
