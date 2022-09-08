import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { fetchTrendingMovies } from '../../servises/moviesApi';

const Home = () => {
  
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const data = await fetchTrendingMovies();
        setTrendingMovies(data.results);
      } catch (error) {
        setError(error);
      }
    }
    getTrendingMovies();
  }, []);

  return (
    
    <>
      {error && <Navigate to="/" replace />}
      <h2>Trending today</h2>
      <ul>
        {trendingMovies.map(({id, title, original_name}) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              {title ?? original_name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
  
}

export default Home;