import React from 'react';
import './style.css';

export default function Search() {
  return (
    <>
      <div className='main'>
        <div className='area'>
          <h3>FIND YOUR MOVIE</h3>
          <div className='search'>
            <input type='text' className='box' placeholder='What do you want to watch?'></input>
            <span className='try'>
                    SEARCH <i className='fas fa-chevron-right'></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );  
}