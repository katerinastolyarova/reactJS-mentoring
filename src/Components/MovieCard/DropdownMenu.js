import React from 'react';
import { Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './style.scss';

const DropdownMenu = ({ handleShow, handleShowDel }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle>
        <span className="threedots"></span>
      </Dropdown.Toggle>
      <Dropdown.Menu size="sm" title=""> 
        <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>
        <Dropdown.Item onClick={handleShowDel}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

DropdownMenu.propTypes = {
  handleShow: PropTypes.boolean,
  handleShowDel: PropTypes.boolean,
};

export default DropdownMenu;
