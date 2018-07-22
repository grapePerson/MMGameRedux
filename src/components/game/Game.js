import React, { Component } from 'react';
import { importAll } from '../../utils/index';
export default class Game extends Component {
  componentWillMount (){
    const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
    this.props.handOutCards(images)
    console.log(images);
  }
  render() {
    const { cards } = this.props;
    return(
      <article>
        <ul>
          {
            cards.map((elem,i)=> {
              return <img src = { elem } key = { i }/>
            })
          }
        </ul>
      </article>
    )
  }
}
