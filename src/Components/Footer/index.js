import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Footer = (props) => <div className='Footer'>{props.children}</div>;

Footer.propTypes = {
  children: PropTypes.string
};

export default Footer;