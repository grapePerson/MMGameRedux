import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

export const Links = ({ userStatus }) => {
  console.log(userStatus);
  return (
    <nav>
      <Link to="/" >Home</Link>
      <Link to="/top">Top 10</Link>
      {userStatus==='guest' ? <Link to="/registration">Registration</Link> : <Fragment/>}


      <Link to="/game">Game</Link>
      <Link to="/difficult">Difficult</Link>
      <Link to="/style">Cards Style</Link>
    </nav>
  )
};
