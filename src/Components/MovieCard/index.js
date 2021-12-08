import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import EditMovie from '../../Components/Modal/EditMovie';
import DeleteMovie from '../../Components/Modal/DeleteMovie';
import PropTypes from 'prop-types';
import './style.scss';

export default function MovieCard(props) {
  const [show, setShow] = useState(false);
  const [del_movie, setDelete] = useState(false);

  const handleCloseDel = () => setDelete(false);
  const handleShowDel = () => setDelete(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='col'>
      <div className='card'>
        <img className='card-img-top' src={props.image} alt='Card image cap'></img>
        <Dropdown>
          <Dropdown.Toggle>
            <span className="threedots"></span>
          </Dropdown.Toggle>
          <Dropdown.Menu size="sm" title=""> 
            <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>
            <Dropdown.Item onClick={handleShowDel}>Delete</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <EditMovie show={show} onHide={handleClose} />
        <DeleteMovie del_movie={del_movie} onHide={handleCloseDel} />

        <div className='card-body'>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>  
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};