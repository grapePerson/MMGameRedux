import React, { Component } from 'react';

export default class Top extends Component {
  componentDidMount (){
    this.props.getTopScore();
  }
  render() {
    const {  scoreStatus, topPlayers, } = this.props;
      if(scoreStatus === 'loaded'){
        let maxCountPlayers = 10;
        let liItem = topPlayers.map((elem,index)=>{
          if(index < maxCountPlayers){
            return (
              <li key = {elem._id}>
                {elem.username} {elem.score}
              </li>
            )
          }
        });
        return (
          <section className = "top-score">
            <h2>Топ 10</h2>
            <ul>
            { liItem }
            </ul>
          </section>
        )
      }else{
        return(
          <section className = "preloader-top">
            <img src = "/images/loader.gif" />
          </section>
        )
    }
  }
}
