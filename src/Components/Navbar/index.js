import React from 'react';
import './style.css';

export default function Navbar() {
  return (
    <>
      <div className='navbar'>
        <li className='logo'><img src='https://www.freepnglogos.com/uploads/netflix-logo-symbol-png-1.png' alt='Logo'></img></li>
        <li className='buttons'>+ADD MOVIE</li>
      </div>
    </>
  );  
}