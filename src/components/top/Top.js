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
          <section>
            <p>Топ 10</p>
            <ul>
            { liItem }
            </ul>
          </section>
        )
      }else{
        return(
          <div>Загрузка</div>
        )
    }
  }
}
