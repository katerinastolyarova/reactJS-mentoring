import React, { useState, useCallback } from 'react';
import DropdownMenu from './DropdownMenu';
import EditMovie from '../../Components/Modal/EditMovie';
import DeleteMovie from '../../Components/Modal/DeleteMovie';
import PropTypes from 'prop-types';
import './style.scss';

export default function MovieCard({ movie, showMovieDetailsProps}) {
  const [show, setShow] = useState(false);
  const [del_movie, setDelete] = useState(false);

  const handleCloseDel = () => setDelete(false);
  const handleShowDel = () => setDelete(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showMovieDetails = useCallback(() => showMovieDetailsProps(movie.id), [showMovieDetailsProps, movie.id]);

  return (
    <div className='col'>
      <div className='card' onClick={showMovieDetails}>
        <img className='card-img-top' src={movie.img} alt='Card image cap'></img>
        <DropdownMenu handleShow={handleShow} handleShowDel={handleShowDel} />
        <EditMovie show={show} onHide={handleClose} />
        <DeleteMovie del_movie={del_movie} onHide={handleCloseDel} />

        <div className='card-body'>
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
        </div>  
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape,
  'movie.title': PropTypes.string.isRequired,
  'movie.description': PropTypes.string.isRequired,
  'movie.img': PropTypes.string.isRequired,
  showMovieDetailsProps: PropTypes.Boolean
};
