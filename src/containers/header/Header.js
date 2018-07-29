import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import { Links } from '../../components/links/Links';

const Header = ({userStatus, gameOver}) => {
  return (
    <header>
      <h1>
        Match-Match Game
      </h1>
      <Links userStatus= {userStatus} gameOver= { gameOver }/>
    </header>
  )
};

Header.propTypes = {
    userStatus: PropTypes.string.isRequired,
    gameOver: PropTypes.bool.isRequired
};


export default connect(
    state => ({userStatus: state.registrationForm.status, gameOver: state.game.gameOver }),
    null
)(Header);
