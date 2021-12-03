import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Footer = (props) => <div className='Footer'>{props.children}</div>;

Footer.propTypes = {
  children: PropTypes.element
};

export default Footer;