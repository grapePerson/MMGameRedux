import React, { Component } from 'react';
import { importAll } from '../../utils/index';
import shuffle from '../../utils/index';

export default class Game extends Component {
  componentWillMount() {
    console.log(1);
    const { cardsOrder } = this.props;
    if(cardsOrder.length < 1) {
      this.props.saveCardsOrder(this.createArrList());
    }
  }
  createDuplicateOfCards() {
    const { cards } = this.props;
    let dblCards = [];
    cards.map((elem) => {
      dblCards.push(elem);
      dblCards.push(elem);
    });
    return dblCards;
  }
  returnMixedCards() {
    let cards = [];
    const { gameDifficult } = this.props;
    let difficult = gameDifficult.split(' ');
    let cardsCount = difficult[0]*difficult[2];
    this.createDuplicateOfCards().map((elem,i) => {
      if(i < cardsCount)  {
        cards.push(elem);
      }
    });
    return shuffle(cards);
  }
  createArrList() {
    let ul = []
    let cards = this.returnMixedCards();
    const { gameDifficult } = this.props;
    let difficult = gameDifficult.split(' ');
    for (let i = 0; i < difficult[2]; i++) {
      let li = []
      for (let j = 0; j < difficult[0]; j++) {
        let imgUrl = cards.pop();
        li.push({url: imgUrl, cardStyle: "card-back-side", liStyle: "card-flipper", id:`${imgUrl}${i}${j}`, checked: false} )
      }
      ul.push(li)
    }
    return ul
  }
  checkClickedCard(ev) {
    if(ev.target.className==="card-front-side" || ev.target.className==="card-shirt"){
      const { checkedCard, addToCheckedCard, clearCheckedCard, cardsOrder, saveCardsOrder, cards, userCanClickOn, userCanClickOff  } = this.props;
      let cardUrl =  ev.target.getAttribute('urlcard');
      let cardId =  ev.target.id;
      if(cardId !== checkedCard.id && checkedCard.userCanClick){
         if(checkedCard.url === ""){
           cardsOrder.map((elem) => {
             elem.map((element) => {
               if(element.id === cardId) {
                  element.liStyle += " do-flipp";
               }
             })
           });
           addToCheckedCard(cardUrl, cardId)
         }else{
           userCanClickOff();
           cardsOrder.map((elem) => {
             elem.map((element) => {
               if(element.id === cardId) {
                  element.liStyle += " do-flipp";
               }
             })
           });

           this.forceUpdate()
           // i have to rework it on async await
           setTimeout(
             (ev) => {
               if(checkedCard.url === cardUrl) {
                 cardsOrder.map((elem) => {
                   elem.map((element) => {
                     if(element.url === checkedCard.url) {
                        console.log("меняю стиль");
                        element.cardStyle += " hide-card";
                     }
                   })
                 });
                clearCheckedCard();
                userCanClickOn();
               }else {
                 cardsOrder.map((elem) => {
                   elem.map((element) => {
                     if(element.url === checkedCard.url || element.url === cardUrl) {
                        element.liStyle = "card-flipper";
                     }
                   })
                 });
                clearCheckedCard();
                userCanClickOn();
               }
             }
             , 1000);
         }
      }
    }
  }

  render() {
    const { cardsOrder, checkedShirt } = this.props;
    return(
      <article onClick = { (ev) => { this.checkClickedCard(ev) } }>
        {
          cardsOrder.map((elem,i) => {
            return (
              <ul key = { i } className = "images-list">
                {
                  elem.map((element,j) => {
                    return (
                      <li key = { `${i}${j}` } className = { element.liStyle }>
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
