import { Box } from "components/Box"

export const MovieCard = ({ movieDetails, imageSrc, movieGenres, movieRelease }) => {
  return (
    <Box>
      <img src={imageSrc} alt={`${movieDetails.title}`} />
      <Box>
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
