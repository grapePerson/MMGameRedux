import React, { Component } from 'react';

export default class DifficultSettings extends Component {
  render() {
    const { allDifficults, gameDifficult, setDifficlt,clearCheckedCard } = this.props;
    return(
      <section>
        <ul>
          {
            allDifficults.map((elem,i) => (
              <li key = { i }>
                <input type="radio"
                  value={ elem } ref={`difficult${i}`} id={`difficult${i}`}
                  name="difficult" defaultChecked={(gameDifficult===elem) ? true : false}
                  onClick = {(ev) => {setDifficlt(ev.target.value);clearCheckedCard()}}
                />
                <label htmlFor={`difficult${i}`}>{ elem }</label>
              </li>
            ))
          }
        </ul>
        <p>Сложность</p>
      </section>
    )
  }
}
