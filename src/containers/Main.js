import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Route, Switch, withRouter, Redirect  } from "react-router-dom";

import { Home } from '../components/home/Home';
import RegistrationForm from '../components/registrationForm/RegistrationForm';
import { ErrorMessage } from '../components/errorMessage/ErrorMessage';
import { DifficultSettings } from '../components/difficultSettings/DifficultSettings';
import { CardShirt } from '../components/cardShirt/CardShirt';
import { WinnerText } from '../components/winnerText/WinnerText';
import { SoundController } from '../components/soundController/SoundController';
import Game from '../components/game/Game';
import Top  from '../components/top/Top';
import { getTopScore } from '../actions/top';
import { checkUserData } from '../actions/registrationForm';
import { handOutCards } from '../actions/game';

class Main extends Component {

  render() {
    const {getTopScore, scoreStatus, topPlayers, checkUserData, userStatus, cards, handOutCards } = this.props;
    return(
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path="/top" render={props => <Top getTopScore = {getTopScore} topPlayers = {topPlayers} scoreStatus = {scoreStatus} />} />
          <Route  path='/registration' render={props => <RegistrationForm checkUserData = { checkUserData } />}/>
          <Route  path='/game' render={props => (
            (userStatus==='guest') ? (<Redirect to="/registration"/>) : (<Game cards = { cards } handOutCards = { handOutCards }/>))}/>
          <Route  path='/difficult' render={props => (
            (userStatus==='guest') ? (<Redirect to="/registration"/>) : (<DifficultSettings />))}/>
          <Route  path='/style' render={props => (
            (userStatus==='guest') ? (<Redirect to="/registration"/>) : (<CardShirt />))}/>
        </Switch>
      </main>
    )
  }
};

Main.propTypes = {
    scoreStatus: PropTypes.string.isRequired,
    userStatus: PropTypes.string.isRequired,
    topPlayers: PropTypes.array,
    getTopScore: PropTypes.func.isRequired,
    checkUserData: PropTypes.func.isRequired,
    handOutCards: PropTypes.func.isRequired,
    cards: PropTypes.array.isRequired
};


export default withRouter(connect(
    state => ({ scoreStatus: state.top.score.status, topPlayers: state.top.score.topPlayers, userStatus: state.registrationForm.status, cards: state.game.cards }),
    {
      getTopScore,
      checkUserData,
      handOutCards
    }
)(Main));

/*

    <Field/>
        <SoundController/>
        <WinnerText/>
        <CardShirt/>
        <ErrorMessage/>
*/