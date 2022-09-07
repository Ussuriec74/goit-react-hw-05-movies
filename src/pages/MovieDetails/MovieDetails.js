import { useState, useEffect } from 'react';
import { Navigate, Outlet, Link, useLocation, useParams } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import { fetchMovieById } from '../../servises/moviesApi';
import { MovieCard } from 'components/MovieCard/MovieCard';


export const MovieDetails = () => {

  const location = useLocation();
  const { movieId } = useParams();
  const backLink = location?.state?.from ?? `/`;
  const [movieDetails, setMovieDetails] = useState([]);
  const [imageSrc, setImageSrc] = useState('');
  const [movieGenres, setMovieGenres] = useState('');
  const [movieRelease, setMovieRelease] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const data = await fetchMovieById(movieId);
        setMovieDetails(data);
        setImageSrc(`https://image.tmdb.org/t/p/w500${data.poster_path}`);
        setMovieGenres(
          data.genres.map(genre => (
            <span key={genre.id}>{`${genre.name} `}</span>
          ))
        );
        setMovieRelease(data.release_date.split('-')[0]);
      } catch (error) {
        setError(error);
      }
    }
    getMovieDetails();
  }, [movieId]);

  

  return (
    <>
      {error && <Navigate to="/movies" replace />}
      <Link to={backLink}>
        <BiArrowBack />Go Back
      </Link>
      <MovieCard
        movieDetails={movieDetails}
        imageSrc={imageSrc}
        movieGenres={movieGenres}
        movieRelease={movieRelease}
      />

    </>
  )
}
