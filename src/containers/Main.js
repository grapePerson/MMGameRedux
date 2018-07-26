import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Route, Switch, withRouter, Redirect  } from "react-router-dom";

import { Home } from '../components/home/Home';
import RegistrationForm from '../components/registrationForm/RegistrationForm';
import { ErrorMessage } from '../components/errorMessage/ErrorMessage';
import DifficultSettings from '../components/difficultSettings/DifficultSettings';
import CardShirt from '../components/cardShirt/CardShirt';
import { WinnerText } from '../components/winnerText/WinnerText';
import { SoundController } from '../components/soundController/SoundController';
import Game from '../components/game/Game';
import Top  from '../components/top/Top';
import { getTopScore } from '../actions/top';
import { checkUserData } from '../actions/registrationForm';
import { handOutCards, compareCards, addFlipp } from '../actions/game';
import { addToCheckedCard, clearCheckedCard, userCanClickOn, userCanClickOff } from '../actions/checkedCard';
import { changeShirt } from '../actions/cardShirt';
import { setDifficlt } from '../actions/difficult';

class Main extends Component {

  render() {
    const {
             getTopScore, scoreStatus, topPlayers, checkUserData,
             userStatus, cards, saveCardsOrder, checkedShirt,
             allShirts, changeShirt, setDifficlt, gameDifficult,
             allDifficults, checkedCard, addToCheckedCard,
             clearCheckedCard, userCanClickOn, userCanClickOff, handOutCards,
             initialArrImg, compareCards, addFlipp, userCanClick

           } = this.props;
    return(
      <main>

          <Route exact path='/' component={Home}/>
          <Route path="/top" render={props => <Top getTopScore = {getTopScore} topPlayers = {topPlayers} scoreStatus = {scoreStatus} />} />
          <Route  path='/registration' render={props => <RegistrationForm checkUserData = { checkUserData } />}/>
          <Route  path='/game' render={props => (
            (userStatus==='guest') ? (<Redirect to="/registration"/>) :
            (<Game cards = { cards } checkedShirt = {checkedShirt} checkedCard = { checkedCard }
             addToCheckedCard = { addToCheckedCard } clearCheckedCard = { clearCheckedCard }
             userCanClickOn = { userCanClickOn } userCanClickOff = { userCanClickOff }
             compareCards = { compareCards } addFlipp = { addFlipp } userCanClick = { userCanClick } />))}/>
          <Route  path='/difficult' render={props => (
            (userStatus==='guest') ? (<Redirect to="/registration"/>) :
            (<DifficultSettings setDifficlt = { setDifficlt } gameDifficult = { gameDifficult }
              allDifficults = { allDifficults } handOutCards = { handOutCards } clearCheckedCard = {clearCheckedCard}/>))}/>
          <Route  path='/style' render={props => (
            (userStatus==='guest') ? (<Redirect to="/registration"/>) :
            (<CardShirt allShirts = {allShirts} checkedShirt = {checkedShirt}  changeShirt = {changeShirt}/>))}/>

      </main>
    )
  }
};

Main.propTypes = {
    scoreStatus: PropTypes.string.isRequired,
    userStatus: PropTypes.string.isRequired,
    checkedCard: PropTypes.object.isRequired,
    gameDifficult: PropTypes.string.isRequired,
    checkedShirt: PropTypes.string.isRequired,
    getTopScore: PropTypes.func.isRequired,
    checkUserData: PropTypes.func.isRequired,
    changeShirt: PropTypes.func.isRequired,
    addFlipp: PropTypes.func.isRequired,
    compareCards: PropTypes.func.isRequired,
    setDifficlt: PropTypes.func.isRequired,
    userCanClickOn: PropTypes.func.isRequired,
    userCanClickOff: PropTypes.func.isRequired,
    handOutCards: PropTypes.func.isRequired,
    cards: PropTypes.array.isRequired,
    topPlayers: PropTypes.array,
    initialArrImg: PropTypes.array,
    allShirts: PropTypes.array,
    allDifficults: PropTypes.array,
    cardsOrder: PropTypes.array,
    userCanClick:PropTypes.bool.isRequired
};


export default withRouter(connect(
    state => ({ scoreStatus: state.top.score.status, topPlayers: state.top.score.topPlayers,
                userStatus: state.registrationForm.status, cards: state.game.cards,
                checkedShirt: state.cardShirt.checkedShirt, allShirts: state.cardShirt.allShirts,
                gameDifficult: state.difficult.gameDifficult, allDifficults : state.difficult.allDifficults,
                checkedCard: state.checkedCard, initialArrImg:state.game.initialArrImg,
                userCanClick: state.checkedCard.userCanClick
              }),
    {
      getTopScore,
      checkUserData,
      changeShirt,
      setDifficlt,
      addToCheckedCard,
      clearCheckedCard,
      userCanClickOn,
      userCanClickOff,
      handOutCards,
      compareCards,
      addFlipp
    }
)(Main));
