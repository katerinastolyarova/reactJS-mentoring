import React from 'react';
import MoviesList from '../MoviesList/MoviesList';
import ContainerBar from '../../Components/Navbar/ContainerBar';
import ErrorBoundary from '../../Utils/ErrorBoundary';

const Container = ({ movies, showMovieDetails }) => {
  return (
    <div className='container'>
      <div className='row'>
        <ContainerBar />
        <ErrorBoundary>
          <MoviesList movies={ movies } showMovieDetails={ showMovieDetails } />
        </ErrorBoundary>
      </div>
    </div>
  );
};

Container.propTypes = {
  movies: [],
  showMovieDetails: Boolean,
};

export default Container;