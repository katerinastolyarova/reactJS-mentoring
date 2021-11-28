import React from 'react';
import PropTypes from 'prop-types';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {

    return { hasError: true };
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
  };


  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h2 style={{ color: '#fff' }}>Something went wrong... We are doing out best to fix issue</h2>;
    }

    return this.props.children; 
  }
}