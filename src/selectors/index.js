import shuffle from '../utils/index';

export const duplucateCards = (arr) => {
  arr.map((elem) => {
    elem.cardStyle = "card-back-side";
    elem.liStyle = "card-flipper";
    arr.push({url: elem.url, id: `${elem.id}copy`, liStyle: "card-flipper", cardStyle: "card-back-side"});
  })
  return arr
}

export const setDifficultForCards = (difficult , arrImg) => {
  const gameDifficult = difficult.split(' ');
  const pairCards = 2;
  const cardsCount = (gameDifficult[0]*gameDifficult[2])/pairCards;
  const cards = shuffle(arrImg).filter((elem,index) => index < cardsCount );
  const doubleCardsDeck = duplucateCards(cards);
  return doubleCardsDeck
}

export const createOrderCards = (difficult , arrCards) => {
  let cards = shuffle(arrCards)
  const gameDifficult = difficult.split(' ');
  let ul = []
  for (let i = 0; i < gameDifficult[2]; i++) {
    let li = []
    for (let j = 0; j < gameDifficult[0]; j++) {
      let cardObject = cards.pop();
      li.push(cardObject)
    }
    ul.push(li)
  }
  return ul
}

export const addFlippClass = (arrList, cardId) => {
  arrList.map((elem, i) => {
    elem.map((element, j) => {
      if(element.id == cardId) {
        element.liStyle += " do-flipp"
      }
    })
  })
  return arrList
}
export const addHideCardClass = (arrList, cardUrl) => {
  arrList.map((elem, i) => {
    elem.map((element, j) => {
      if(element.url === cardUrl){
        element.cardStyle += " hide-card"
      }
    })
  })
  return arrList
}

export const removeFlippClass = (arrList, checkedCard , cardId) => {
  arrList.map((elem, i) => {
    elem.map((element, j) => {
      if(element.url === checkedCard.url || element.id == cardId){
        element.liStyle = "card-flipper"
      }
    })
  })
  return arrList
}

export const checkHideenCards = (arrOfArr) => {
  return arrOfArr.map( element => {
           return  element.every((elem) =>
             elem.cardStyle === 'card-back-side hide-card'
           )
         });
}
