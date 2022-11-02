import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import css from './Hero.module.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getHero } from 'services/Api';

// function Hero({ data }) {
// Import Swiper React components

function Hero() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchRezult = await getHero();
        setData(fetchRezult);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);
  const { results } = data;
  console.log('results :', results);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 9500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={css.swiper}
      >
        {results?.map(elem => {
          const urlImg = `https://image.tmdb.org/t/p/original/${elem.backdrop_path}`;
          return (
            <SwiperSlide className={css.slide} key={elem.id}>
              <h1 className={css.title}>{elem.title || elem.original_name}</h1>
              <img src={urlImg} className={css.slideImg} alt={elem.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Hero;
