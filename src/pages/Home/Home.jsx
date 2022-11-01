import React from 'react';
// import PropTypes from 'prop-types';
// import Hero from 'components/Hero/Hero';
import Galerry from 'components/Galerry/Galerry';

const Home = ({ data }) => {
  return (
    <>
      {/* <Hero data={data} /> */}
      <Galerry data={data} />
    </>
  );
};

// Home.propTypes = {};

export default Home;
