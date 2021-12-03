import React from 'react';
import MoviesList from '../MoviesList/MoviesList';
import ErrorBoundary from '../../Utils/ErrorBoundary';

export default function Container() {
  return (
    <div className='container'>
      <div className='row'>
        <ErrorBoundary>
          <MoviesList />
        </ErrorBoundary>
      </div>
    </div>
  );
}