import { getCast } from 'services/Api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

function Cast() {
  const { movieId } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const searchData = async () => {
      try {
        const searchRezult = await getCast(movieId);
        setData(searchRezult);
      } catch (error) {
        console.log(error.message);
      }
    };
    searchData();
    // eslint-disable-next-line
  }, []);
  const { cast } = data;
  console.log('cast :', cast);
  return (
    <div>
      <ul className={css.cast}>
        {cast?.map(elem => {
          const urlImg = `https://image.tmdb.org/t/p/w500/${elem.profile_path}`;
          return (
            <li className={''} key={elem.id}>
              <img src={urlImg} alt={''} className={css.foto} width="80px" />
              <p className={css.name}>{elem.original_name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cast;
