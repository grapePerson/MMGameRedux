import React, { Component } from 'react';

export default class RegistrationForm extends Component {

  takeUserName(){
    const minLength = 3;
    const maxLength = 8;
    let userData = this.refs.userName.value;
    this.refs.userName.value = '';
    if(userData.length < minLength || userData.length >= maxLength) {
      return false
    }else{
      return userData;
    }
  }

  takeEmail(){
    let userData = this.refs.email.value;
    let pattern =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.refs.email.value = '';
    if(pattern.test(String(userData).toLowerCase())){
      return userData;
    }else{
      return false
    }
  }

  takeFormDataAndStart(){
    let formData = [];
    formData.push(this.takeUserName(),this.takeEmail());
    if(!formData.some( elem => elem === false)){
      this.props.checkUserData(formData[0],formData[1]);
    }else{
      console.log("rewrite");
    }
  }

  render(){
    return (
      <form>
        <div>
          <label htmlFor="userName">User name</label>
          <input type="text" ref="userName" placeholder="от 3 до 8 символов" />
          <label htmlFor="email">Email</label>
          <input type="text" ref="email"  placeholder="email"/>
          <input type="button" value="Поехали" onClick = {this.takeFormDataAndStart.bind(this)}/>
          <p>Пожалуйста введите ваши данные</p>
        </div>
      </form>
    )
  }
};
