import React, { Component } from 'react';
import {  pause } from '../../utils/index';
import { ANIMATION_PAUSE } from "../../constants/game";

export default class Game extends Component {

  async checkClickedCard (ev) {
    const { addToCheckedCard, checkedCard, addFlipp, compareCards, clearCheckedCard, userCanClickOn, userCanClickOff, userCanClick, checkCardsCount} = this.props;
    if(ev.target.className==="card-front-side" || ev.target.className==="card-shirt"){
      const cardUrl = ev.target.getAttribute('urlcard');
      const cardId = ev.target.id;
      if(checkedCard.id != cardId && userCanClick){
        if(!checkedCard.url) {
          addToCheckedCard(cardUrl, cardId);
          addFlipp(cardId);
        }else{
          addFlipp(cardId);
          userCanClickOff();
          await pause(ANIMATION_PAUSE);
          compareCards(checkedCard, cardUrl, cardId);
          clearCheckedCard();
          userCanClickOn();
          checkCardsCount();
        }
      }
    }
  }
  componentDidUpdate() {
    const { gameOver, redirectToWinner, playFile, playCardTheme } = this.props;
    if(playFile){
      let string = playFile.split("/")[2].split(".")[0];
      playCardTheme(string);
    }
    if(gameOver) {
       redirectToWinner();
    }
  }
  render() {
    const { cards, checkedShirt, gameOver } = this.props;
    return(
      <section className="game-container">
        <article onClick = { (ev) => { this.checkClickedCard(ev) } }>
          {
            cards.map((elem,i) => {
              return (
                <ul key = { i } className = "images-list">
                  {
                    elem.map((element,j) => {
                      return (
                        <li key = { element.id } className = { element.liStyle }>
                          <div className = "card-front-side" urlcard ={ element.url } id = { element.id }></div>
                          <img src = { checkedShirt } className = "card-shirt"   urlcard ={ element.url } id = { element.id } />
                          <img src = { element.url } className = { element.cardStyle }  />
                        </li>
                        )
                      }
                    )
                  }
                </ul>
              )
            })
          }
        </article>
      </section>
    )
  }

}
