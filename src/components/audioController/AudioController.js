import React from 'react';

export const AudioController = ({ volumeUp, volumeDown, mainTheme, playMainTheme,stopMainTheme }) => {

  let audioFunction
  if(mainTheme === "stop"){
    audioFunction = stopMainTheme
  } else {
    audioFunction = playMainTheme
  }
  return (
    <section className = "audio-controller-contaner">
      <p onClick = { volumeDown }>-</p>
      <p onClick = { volumeUp }>+</p>
      <p onClick = { audioFunction }>{ mainTheme }</p>
    </section>
  )
  
};
