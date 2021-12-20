import React from 'react';
import ModalWindow from './ModalWindow';
import PropTypes from 'prop-types';
import './style.scss';

export default function EditMovie({ show, onHide }) {
  return (
    <ModalWindow modalTitle='EDIT MOVIE' show={show} onHide={onHide} />
  );
} 

EditMovie.propTypes = {
  show: PropTypes.boolean,
  onHide: PropTypes.boolean,
};