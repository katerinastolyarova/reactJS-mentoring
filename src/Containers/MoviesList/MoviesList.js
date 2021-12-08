import React from 'react';
import MovieCard from '../../Components/MovieCard/index';

const MoviesList = ({ movies }) => {
  if (movies.length === 0) {
    throw new Error ('not performing tonight!');
  }
  
  return (
    <>
      {movies.map((movie) => (
        <MovieCard
          image={movie.img}
          title={movie.title}
          description={movie.description}
          key={movie.id}
        />
      ))}
    </>
  );
};

MoviesList.propTypes = {
  movies: [],
};

export default MoviesList;