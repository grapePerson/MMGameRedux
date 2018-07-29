import { Route, Switch, withRouter, Redirect  } from "react-router-dom";
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";


import { Home } from '../../components/home/Home';
import { AudioController } from '../../components/audioController/AudioController';
import { ErrorMessage } from '../../components/errorMessage/ErrorMessage';
import RegistrationForm from '../../components/registrationForm/RegistrationForm';
import DifficultSettings from '../../components/difficultSettings/DifficultSettings';
import CardShirt from '../../components/cardShirt/CardShirt';
import WinnerText from '../../components/winnerText/WinnerText';
import Login from '../../components/login/Login';
import Game from '../../components/game/Game';
import Top  from '../../components/top/Top';
import { getTopScore } from '../../actions/top';
import { checkUserData, checkLoginData } from '../../actions/registrationForm';
import { handOutCards, compareCards, addFlipp, checkCardsCount, redirectToWinner } from '../../actions/game';
import { addToCheckedCard, clearCheckedCard, userCanClickOn, userCanClickOff } from '../../actions/checkedCard';
import { changeShirt } from '../../actions/cardShirt';
import { setDifficlt } from '../../actions/difficult';
import { saveUserScore, clearScoreMessage } from '../../actions/saveScore';
import { volumeUp, volumeDown, playMainTheme, stopMainTheme, playCardTheme, removeCardsTheme } from '../../actions/audio';

class Main extends Component {

  render() {
    const {
             getTopScore, scoreStatus, topPlayers, checkUserData,
             userStatus, cards, saveCardsOrder, checkedShirt,
             allShirts, changeShirt, setDifficlt, gameDifficult,
             allDifficults, checkedCard, addToCheckedCard,
             clearCheckedCard, userCanClickOn, userCanClickOff,
             handOutCards, initialArrImg, compareCards, addFlipp,
             userCanClick, checkCardsCount, gameOver, redirectToWinner,
             time, messageTxt, volumeUp, volumeDown, playMainTheme,
             stopMainTheme, mainTheme, playFile, playCardTheme,
             click, checkLoginData, email, user, saveUserScore,
             request, scoreMessage, clearScoreMessage, removeCardsTheme
           } = this.props;
    return(
      <main>
          <Route exact path='/' component={Home}/>
          <Route exact path='/audio' render={props =>
            <AudioController volumeUp = { volumeUp } volumeDown = { volumeDown }
            stopMainTheme = { stopMainTheme } playMainTheme = { playMainTheme } mainTheme = { mainTheme }/>}/>
          <Route  path='/winner' render={props => (
            (gameOver===false) ? (<Redirect to="/"/>) :
            (<WinnerText time = {time} gameDifficult = { gameDifficult } click = { click }
              saveUserScore = { saveUserScore } email = { email } user = { user }
              scoreMessage = { scoreMessage } request = { request } clearScoreMessage = { clearScoreMessage } />))}/>
          <Route  path='/error' render={props => (
            (messageTxt==false) ? (<Redirect to="/"/>) :
            (<ErrorMessage messageTxt = { messageTxt } />))}/>
          <Route path="/top" render={props => <Top getTopScore = {getTopScore} topPlayers = {topPlayers} scoreStatus = {scoreStatus} />} />
          <Route  path='/registration' render={props => <RegistrationForm checkUserData = { checkUserData } />}/>
          <Route  path='/login' render={props => <Login checkLoginData = { checkLoginData } />}/>
          <Route  path='/game' render={props => (
            (userStatus==='guest') ? (<Redirect to="/registration"/>) :
            (<Game cards = { cards } checkedShirt = {checkedShirt} checkedCard = { checkedCard }
             addToCheckedCard = { addToCheckedCard } clearCheckedCard = { clearCheckedCard }
             userCanClickOn = { userCanClickOn } userCanClickOff = { userCanClickOff }
             compareCards = { compareCards } addFlipp = { addFlipp } userCanClick = { userCanClick }
             checkCardsCount = { checkCardsCount } redirectToWinner = { redirectToWinner }
             gameOver = { gameOver } playFile = { playFile } playCardTheme = { playCardTheme } />))}/>
          <Route  path='/difficult' render={props => (
            (userStatus==='guest') ? (<Redirect to="/registration"/>) :
            (<DifficultSettings setDifficlt = { setDifficlt } gameDifficult = { gameDifficult }
              allDifficults = { allDifficults } handOutCards = { handOutCards } clearCheckedCard = {clearCheckedCard} removeCardsTheme = { removeCardsTheme } />))}/>
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
    gameDifficult: PropTypes.string.isRequired,
    checkedShirt: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    playFile: PropTypes.string.isRequired,
    mainTheme: PropTypes.string.isRequired,
    scoreMessage: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    messageTxt: PropTypes.string.isRequired,
    getTopScore: PropTypes.func.isRequired,
    checkUserData: PropTypes.func.isRequired,
    changeShirt: PropTypes.func.isRequired,
    playMainTheme: PropTypes.func.isRequired,
    removeCardsTheme: PropTypes.func.isRequired,
    stopMainTheme: PropTypes.func.isRequired,
    addFlipp: PropTypes.func.isRequired,
    compareCards: PropTypes.func.isRequired,
    setDifficlt: PropTypes.func.isRequired,
    volumeUp: PropTypes.func.isRequired,
    clearScoreMessage: PropTypes.func.isRequired,
    checkLoginData: PropTypes.func.isRequired,
    volumeDown: PropTypes.func.isRequired,
    playCardTheme: PropTypes.func.isRequired,
    saveUserScore: PropTypes.func.isRequired,
    redirectToWinner: PropTypes.func.isRequired,
    checkCardsCount: PropTypes.func.isRequired,
    userCanClickOn: PropTypes.func.isRequired,
    userCanClickOff: PropTypes.func.isRequired,
    handOutCards: PropTypes.func.isRequired,
    cards: PropTypes.array.isRequired,
    topPlayers: PropTypes.array,
    initialArrImg: PropTypes.array,
    allShirts: PropTypes.array,
    allDifficults: PropTypes.array,
    cardsOrder: PropTypes.array,
    userCanClick:PropTypes.bool.isRequired,
    request:PropTypes.bool.isRequired,
    gameOver:PropTypes.bool.isRequired,
    checkedCard: PropTypes.object.isRequired,
    click: PropTypes.number.isRequired
};


export default withRouter(connect(
    state => ({ scoreStatus: state.top.score.status, topPlayers: state.top.score.topPlayers,
                userStatus: state.registrationForm.status, cards: state.game.cards,
                checkedShirt: state.cardShirt.checkedShirt, allShirts: state.cardShirt.allShirts,
                gameDifficult: state.difficult.gameDifficult, allDifficults : state.difficult.allDifficults,
                checkedCard: state.checkedCard, initialArrImg:state.game.initialArrImg,
                userCanClick: state.checkedCard.userCanClick, gameOver: state.game.gameOver,
                time: state.game.time, messageTxt:  state.registrationForm.message,
                mainTheme: state.audio.mainTheme, playFile: state.game.playFile, click: state.game.click,
                user: state.registrationForm.user, email: state.registrationForm.userEmail,
                scoreMessage: state.saveScore.message, request: state.saveScore.request
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
      addFlipp,
      checkCardsCount,
      redirectToWinner,
      volumeUp,
      volumeDown,
      playMainTheme,
      stopMainTheme,
      playCardTheme,
      checkLoginData,
      saveUserScore,
      clearScoreMessage,
      removeCardsTheme
    }
)(Main));
