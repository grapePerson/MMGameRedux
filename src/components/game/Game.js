import React, { Component } from 'react';
import { importAll } from '../../utils/index';
import shuffle from '../../utils/index';

export default class Game extends Component {
  componentWillMount() {
    const { cardsOrder } = this.props;
    if(cardsOrder.length < 1) {
      this.props.saveCardsOrder(this.returnMixedCards())
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
  createList = () => {
  let ul = []
  const { gameDifficult } = this.props;
  let difficult = gameDifficult.split(' ');
  // Outer loop to create parent
  for (let i = 0; i < difficult[2]; i++) {
    let children = []
    //Inner loop to create children
    for (let j = 0; j < 5; j++) {
      children.push(<td>{`Column ${j + 1}`}</td>)
    }
    //Create the parent and add the children
    table.push(<tr>{children}</tr>)
  }
  return table
}
  render() {
    const { cardsOrder } = this.props;
    return(
      <article>
        <ul>
          {
                // cardsOrder.map((elem,i)=> {
                //   //выводить правельный
                //   return <img src = { elem } key = { i } onClick = { (ev) => {console.log(ev.target)} }/>
                // })
          }
        </ul>
      </article>
    )
  }
}
