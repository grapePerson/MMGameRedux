import React from 'react';

export const ErrorMessage = ({messageTxt}) => {
  return (
    <section className = "error-mesage">
      <p>{ messageTxt }</p>
    </section>
  )
};
