import React, { Component } from 'react';

export default class Login extends Component {
  render(){
    const { checkLoginData } =this.props;
    return (
      <section className = "login-container">
        <form>
            <label htmlFor="userName">Имя пользователя</label>
            <input type="text" ref="userName" id="userName" placeholder="Имя пользователся"/>
            <label htmlFor="email">Email</label>
            <input type="text" ref="email" id="email" placeholder="email"/>
            <input type="button" value="Войти" onClick = {() => { checkLoginData(this.refs.userName.value,this.refs.email.value) } }/>
        </form>
      </section>
    )
  }
};
