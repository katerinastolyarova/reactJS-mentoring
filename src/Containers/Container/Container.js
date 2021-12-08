import React from 'react';
import MoviesList from '../MoviesList/MoviesList';
import ContainerBar from '../../Components/Navbar/ContainerBar';
import ErrorBoundary from '../../Utils/ErrorBoundary';

const Container = ({ movies }) => {
  return (
    <div className='container'>
      <div className='row'>
        <ContainerBar />
        <ErrorBoundary>
          <MoviesList movies={ movies } />
        </ErrorBoundary>
      </div>
    </div>
  );
};

Container.propTypes = {
  movies: [],
};

export default Container;