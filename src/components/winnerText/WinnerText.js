import React, { Component } from 'react';

export default class WinnerText extends Component {
  componentDidMount (){
    const {  clearScoreMessage } = this.props;
    clearScoreMessage();
  }

  render() {
    const {  time, gameDifficult, click, user, email, saveUserScore, request, scoreMessage } = this.props;
    let loadingState
    if(request){
      loadingState = <p>Идет сохранение</p>
    } else {
      loadingState = <p>{ scoreMessage }</p>
    }
    return(
      <section className = "winner-text-container">
        <article>
          <p>Поздравляю {user} ! Ты победил.</p>
          <p>Твое время {time}, сложность { gameDifficult }</p>
          <p>Попытки : { click } </p>
          <p>Ты можешь начать заново выбрав ,такую же сложность или новую.</p>
          <input type ="button" value = "сохранить результат" onClick = { () => { saveUserScore(user, email, click) } }/>
          { loadingState }
        </article>
      </section>
    )
  }
}
