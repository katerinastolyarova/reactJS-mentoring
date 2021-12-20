import React, { useState } from 'react';
import AddMovie from '../../Components/Modal/AddMovie';
import './style.scss';

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='navbar'>
        <li className='logo'><img src='https://www.freepnglogos.com/uploads/netflix-logo-symbol-png-1.png' alt='Logo'></img></li>
        <li className='buttons' onClick={handleShow} >+ ADD MOVIE</li>
      </div>
      <AddMovie show={show} onHide={handleClose} />
    </>
  );  
}