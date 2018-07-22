import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import { Links } from '../components/links/Links';

const Header = ({userStatus}) => {
  return (
    <header>
      <h1>
        Match-Match Game
      </h1>
      <Links userStatus= {userStatus}/>
    </header>
  )
};

Header.propTypes = {
    userStatus: PropTypes.string.isRequired
};


export default connect(
    state => ({userStatus: state.registrationForm.status }),
    null
)(Header);
