import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieList from '../../components/MovieList/MovieList';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'Prison break';
  const showText = 'Prison break';

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return (
    <div>
      <MovieList />
    </div>
  );
};

export default Home;
