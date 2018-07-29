import React, { Component, Fragment } from 'react';

import Header from './containers/header/Header';
import Main from './containers/main/Main';
import Audio from './containers/audio/Audio';

export default class App extends Component {
  render() {
    return(
      <Fragment>
        <Audio/>
        <Header/>
        <Main/>
      </Fragment>
    )
  }
};
