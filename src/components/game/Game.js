import React, { Component } from 'react';
import { importAll } from '../../utils/index';
import shuffle from '../../utils/index';

export default class Game extends Component {
  checkClickedCard (ev) {
    const { addToCheckedCard, checkedCard, addFlipp, compareCards, clearCheckedCard, userCanClickOn, userCanClickOff, userCanClick} = this.props;
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
          //i have to rework on asunc await
          setTimeout(()=>{
            compareCards(checkedCard, cardUrl, cardId);
            clearCheckedCard();
            userCanClickOn();
          },1000)
        }
      }
    }
  }
  render() {
    const { cards, checkedShirt } = this.props;
    return(
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
    )
  }

}
