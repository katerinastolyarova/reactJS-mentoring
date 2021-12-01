import React from 'react';

import PropTypes from 'prop-types';
import './style.scss';

export default function MovieCard(props) {
  return (
    <div className='col'>
      <div className='card'>
        <img className='card-img-top' src={props.image} alt='Card image cap'></img>
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