import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// Import custom components
import Routes from '../../routers/routes';

class AppContainer extends Component {
  render() {
    return <Routes />;
  }
}

export default hot(module)(AppContainer);
