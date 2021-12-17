import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './style.scss';

export default function DeleteMovie(props) {
  return (
    <Modal show={props.del_movie} onHide={props.onHide}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <Modal.Title>DELETE MOVIE</Modal.Title>
        <p>Are you sure you want to delete this movie?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="ButtonColor" onClick={props.onHide}>CONFIRM</Button>
      </Modal.Footer>
    </Modal>
  );
} 

DeleteMovie.propTypes = {
  del_movie: PropTypes.boolean,
  onHide: PropTypes.boolean,
};