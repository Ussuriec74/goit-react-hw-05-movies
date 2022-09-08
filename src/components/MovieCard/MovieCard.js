import { Box } from "components/Box";
import { MoviePoster } from "components/MovieCard/MovieCard.styled";

export const MovieCard = ({ movieDetails, imageSrc, movieGenres, movieRelease }) => {
  return (
    <Box display="flex" ml={4}>
      <MoviePoster src={imageSrc} alt={`${movieDetails.title}`} />
      <Box p={4}>
        <h2>{`${movieDetails.original_title} (${movieRelease})`}</h2>
        <p>{`User score: ${(movieDetails.vote_average * 10).toFixed(2)}%`}</p>
        <h3>Overview</h3>
        <p>{`${movieDetails.overview}`}</p>
        <h3>Genres</h3>
        <p>{movieGenres}</p>
      </Box>
    </Box>
  );
};
