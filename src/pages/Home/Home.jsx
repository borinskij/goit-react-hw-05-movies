import React, { useEffect, useState } from 'react';

import Galerry from 'components/Galerry/Galerry';
import { getMovies } from 'Helpers/Api';
import { Outlet } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);

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
      <Outlet />
      <Galerry data={data} />
    </>
  );
};

export default Home;
