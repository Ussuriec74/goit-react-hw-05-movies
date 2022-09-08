import { useState, useEffect } from 'react';
import { Navigate, Link, useLocation, useSearchParams } from 'react-router-dom';
import { Box } from 'components/Box';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchMoviesOnSearch } from '../../servises/moviesApi';

const Movies = () => {

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const movie = searchParams.get('query');
    if (!movie) return;
    
    async function getSearchMovies() {
      try {
        const data = await fetchMoviesOnSearch(movie);
        setSearchMovies(data.results);
      } catch (error) {
        setError(error);
      }
    }
    getSearchMovies();
  }, [searchParams]);

  const handleSubmit = searchQuery => {
    setSearchParams({ query: searchQuery });
  };

  return (
    <>
      {error && <Navigate to="/movies" replace />}
      <Searchbar onSubmit={handleSubmit} />
      {searchMovies && (
        <Box as="ul">
          {searchMovies.map(({ id, title, original_name }) => (
            <li key={id} >
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title ?? original_name}
              </Link>
            </li>
          ))}
        </Box>
      )}
    </>
  );
};

export default Movies;
