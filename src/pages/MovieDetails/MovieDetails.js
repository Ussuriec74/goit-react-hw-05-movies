import { useState, useEffect, Suspense } from 'react';
import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import { Box } from 'components/Box';
import { fetchMovieById } from '../../servises/moviesApi';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Loader } from 'components/Loader/Loader';
import { GoBackBtn, BtnList, AdditionalBtn } from './MovieDetails.styled';


const MovieDetails = () => {

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
      <GoBackBtn to={backLink}>
        <BiArrowBack />Go Back
      </GoBackBtn>
      <MovieCard
        movieDetails={movieDetails}
        imageSrc={imageSrc}
        movieGenres={movieGenres}
        movieRelease={movieRelease}
      />
      <Box pt={4} ml={4} mr={4} borderTop="2px solid gray" >
        <h4>Additional information:</h4>
        <BtnList >
          <li>
            <AdditionalBtn to="cast" datarelease={movieRelease}>
              Cast
            </AdditionalBtn>
          </li>
          <li>
            <AdditionalBtn to="reviews">Reviews</AdditionalBtn>
          </li>
        </BtnList>
        <Suspense fallback={ <Loader /> }>
          <Outlet />
        </Suspense> 
      </Box>


    </>
  )
}

export default MovieDetails;
