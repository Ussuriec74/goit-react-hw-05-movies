import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { fetchReviews } from '../../servises/moviesApi';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const data = await fetchReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(error);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <>
      {error && <Navigate to="/movies" replace />}
      {reviews.length === 0
        ? (<p>We don`t have any reviews on this movie</p>)
        : (<ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>)
      }
    </>
  )
}
