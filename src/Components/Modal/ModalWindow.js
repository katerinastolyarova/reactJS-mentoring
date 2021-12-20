import React from 'react';
import { Button, Modal,Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './style.scss';

const ModalWindow = ({ modalTitle, show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <Modal.Title>{modalTitle}</Modal.Title>
        <Form>
          <Form.Group >
            <Form.Label>TITLE</Form.Label>
            <Form.Control type="text" placeholder="Moana" />
          </Form.Group>
    
          <Form.Group>
            <Form.Label>RELEASE DATE</Form.Label>
            <Form.Control type="date" placeholder="Select Date" />
          </Form.Group>
    
          <Form.Group>
            <Form.Label>MOVIE URL</Form.Label>
            <Form.Control type="text" placeholder="MOVIE URL here" />
          </Form.Group>
    
          <Form.Group>
            <Form.Label>GENRE</Form.Label>
            <Form.Control as="select">
              <option>Select Genre</option>
              <option>Action</option>
              <option>Adventure</option>
              <option>Drama</option>
            </Form.Control>
          </Form.Group>
    
          <Form.Group>
            <Form.Label>OVERVIEW</Form.Label>
            <Form.Control type="text" placeholder="Overview here" />
          </Form.Group>
          <Form.Group >
            <Form.Label>RUNTIME</Form.Label>
            <Form.Control type="text" placeholder="Runtime here" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="form-buttons" variant="secondary" onClick={onHide} type="submit">RESET</Button>
        <Button variant="danger" onClick={onHide} type="submit">SAVE</Button>
      </Modal.Footer>
    </Modal>
  );
};

ModalWindow.propTypes = {
  modalTitle: PropTypes.string,
  show: PropTypes.boolean,
  onHide: PropTypes.boolean,
};

export default ModalWindow;