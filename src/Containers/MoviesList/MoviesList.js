import React from 'react';
import MovieCard from '../../Components/MovieCard/index';

const MoviesList = ({ movies, showMovieDetails }) => {
  if (movies.length === 0) {
    throw new Error ('not performing tonight!');
  }
  
  return (
    <>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          showMovieDetailsProps={showMovieDetails}
        />
      ))}
    </>
  );
};

MoviesList.propTypes = {
  movies: [],
  showMovieDetails: Boolean,
};

export default MoviesList;