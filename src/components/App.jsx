import { Routes, Route } from "react-router-dom";
import { Box } from 'components/Box';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { Layout } from "components/Layout";

export const App = () => {
  return (
    <Box>      
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path='movies/:movieId' element={<MovieDetails />} >
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Box>
  );
};
