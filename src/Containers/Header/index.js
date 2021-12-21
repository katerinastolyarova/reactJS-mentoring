import React from 'react';
import Navbar from '../../Components/Navbar';
import Search from '../../Components/Search';
import MovieDetails from '../../Components/MovieDetails/index';
import PropTypes from 'prop-types';

export default function Header({showSearchPanel, movieId}) {
  return (
    <>
      <Navbar showSearchPanel={showSearchPanel} movieId={movieId} />
      {movieId && (
        <MovieDetails id={movieId} />
      )}
      {!movieId && (
        <Search />
      )}   
    </>
  );  
}

Header.propTypes = {
  showSearchPanel: PropTypes.Boolean,
  movieId: PropTypes.string
};