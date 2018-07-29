import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { playMainTheme, playCardTheme } from '../../actions/audio';

class Audio extends Component {
  componentDidMount() {
    const { playMainTheme } = this.props;
    playMainTheme();
  }
  render() {
    const { files } = this.props;
    return(
      files.map((elem) => (<audio src = { elem.url } id = { elem.id } key = { elem.id }/>))
    )
  }
}

Audio.propTypes = {
    files: PropTypes.array.isRequired,
    playMainTheme: PropTypes.func.isRequired
};


export default connect(
    state => ({files: state.audio.files}),
    {
      playMainTheme,
      playCardTheme
    }
)(Audio);
