// import { Header } from 'components/Header/Header';
// import { getSearch } from 'Helpers/Api';
import Galerry from 'components/Galerry/Galerry';
import { searchDataGet } from 'Helpers/Api';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import css from './Movies.module.css';

const Movies = () => {
  const [searchData, setSearchData] = useState([]);
  const [params] = useSearchParams();
  let query = params.get('query') || '';

  useEffect(() => {
    if (!query) {
      return;
    }
    const searchData = async () => {
      try {
        const searchRezult = await searchDataGet(query);
        setSearchData(searchRezult);
      } catch (error) {
        console.log(error.message);
      }
    };
    searchData();
  }, [query]);
  const qwe = <h2>Мерші до пошуку </h2>;

  return <>{{ qwe } && { query } && <Galerry data={searchData} />}</>;
};

// Movies.propTypes = {};

export default Movies;
