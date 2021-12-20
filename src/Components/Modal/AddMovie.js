import React from 'react';
import ModalWindow from './ModalWindow';
import PropTypes from 'prop-types';
import './style.scss';

export default function AddMovie({show, onHide}) {
  return (
    <ModalWindow modalTitle='ADD MOVIE' show={show} onHide={onHide} />
  );
} 

AddMovie.propTypes = {
  show: PropTypes.boolean,
  onHide: PropTypes.boolean,
};