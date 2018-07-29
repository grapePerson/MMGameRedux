import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

export const Links = ({ userStatus, gameOver }) => {
  return (
    <nav>
      <Link to="/" >Home</Link>
      <Link to="/top">Top 10</Link>
      {userStatus==='guest' ? <Link to="/registration">Registration</Link> : <Fragment/>}
      {userStatus==='guest' ? <Link to="/login">login</Link> : <Fragment/>}
      {gameOver===false ? <Link to="/game">Game</Link> : <Fragment/>}
      <Link to="/difficult">Difficult</Link>
      <Link to="/style">Cards Style</Link>
      <Link to="/audio">Audio</Link>
    </nav>
  )
};
