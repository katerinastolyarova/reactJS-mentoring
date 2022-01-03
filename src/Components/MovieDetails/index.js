import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moviesFromJson from '../../assets/data/movies.json';
import './style.scss';

function MovieDetails(props) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    Promise
      .resolve(moviesFromJson)
      .then(movies => setMovie(movies.find(m => m.id === props.id)));
  }, [props.id]);

  return (
    <div className='main'>
      <div className='row'>
        <div className='col'>
          <img width="400" height="500" src={movie.img} alt='Card image cap'></img>
        </div>
        <div className='col'>
          <h3 style={{ color: '#fff' }}>{movie.title}</h3>
          <p style={{ color: '#fff' }}>{movie.description}</p>
        </div>
      </div>
    </div>  
  );  
}

MovieDetails.propTypes = {
  id: PropTypes.string.isRequired
};

export default MovieDetails;
