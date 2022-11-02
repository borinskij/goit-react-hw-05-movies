import { getReviews } from 'Helpers/Api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Reviews() {
  const { movieId } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const searchData = async () => {
      try {
        const searchRezult = await getReviews(movieId);
        setData(searchRezult);
        console.log('searchRezult :', searchRezult);
      } catch (error) {
        console.log(error.message);
      }
    };
    searchData();
    // eslint-disable-next-line
  }, []);
  const { results } = data;
  return (
    <>
      {results?.map(elem => {
        return (
          <>
            <h4>{elem.author}</h4>
            <p>{elem.content}</p>
            <p>{elem.updated_at}</p>
          </>
        );
      })}
    </>
  );
}

export default Reviews;
