import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { fetchCast } from '../../servises/moviesApi';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        const data = await fetchCast(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(error);
      }
    }
    getCast()
  }, [movieId]);

  return (
    <>
      {error && <Navigate to="/movies" replace />}
      {!cast
        ? (<p>We don`t have any cast on this movie</p>)
        : (<ul>
          {cast.map(acter => (
            <li key={acter.cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${acter.profile_path}`}
                alt={acter.name}
              />
              <p> {acter.name}</p>
              <p>Character: {acter.character ?? 'individual character'}</p>
            </li>
          ))}
        </ul>)}
    </>
  )
}
