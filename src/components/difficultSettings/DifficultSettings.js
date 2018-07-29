import React, { Component } from 'react';

export default class DifficultSettings extends Component {

  render() {
    const { allDifficults, gameDifficult, setDifficlt, handOutCards, clearCheckedCard, removeCardsTheme } = this.props;
    return(
      <section className = "dificult-container">
        <h2>Сложность</h2>
        <ul>
          {
            allDifficults.map((elem,i) => (
              <li key = { i }>
                <input type="radio"
                  value={ elem } ref={`difficult${i}`} id={`difficult${i}`}
                  name="difficult" defaultChecked={(gameDifficult===elem) ? true : false}
                  onClick = {(ev) => {
                      setDifficlt(ev.target.value);
                      handOutCards(ev.target.value);
                      clearCheckedCard();
                      removeCardsTheme();
                    }
                  }
                />
                <label htmlFor={`difficult${i}`}>{ elem }</label>
              </li>
            ))
          }
        </ul>
      </section>
    )
  }
  
}
