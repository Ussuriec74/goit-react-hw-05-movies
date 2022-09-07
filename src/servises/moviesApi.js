import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = "3b8854889b3ae9f1745391c328ab3fe2";

async function fetchTrendingMovies( page = 1 ) {
    
    try {
      const response = await axios.get(
        `/trending/movie/day?api_key=${API_KEY}&page=${page}`
      );
      return response.data;
    
    } catch (error) {
        console.error(error);
    } 
}

async function fetchMoviesOnSearch( searchQuery = "", page = 1) {
    try {
      const response = await axios.get(
        `/search/movie?api_key=${API_KEY}&page=${page}&query=${searchQuery}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
}
  
async function fetchMovieById(id) {
    try {
      const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  
async function fetchCast(id) {
  try {
    const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function fetchReviews(id) {
  try {
    const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export { fetchTrendingMovies, fetchMoviesOnSearch, fetchMovieById, fetchCast, fetchReviews };

