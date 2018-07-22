import React from 'react';

export const DifficultSettings = () => {
  return (
    <section>
      <ul>
        <li>
          <input type="radio" id="difficult1" name="difficult" value="5 X 2" defaultChecked />
          <label htmlFor="difficult1">5 X 2</label>
        </li>
        <li>
          <input type="radio" id="difficult2" name="difficult" value="6 X 3" />
          <label htmlFor="difficult2">6 X 3</label>
        </li>
        <li>
          <input type="radio" id="difficult3" name="difficult" value="8 X 3" />
          <label htmlFor="difficult3">8 X 3</label>
        </li>
      </ul>
      <p>Сложность</p>
    </section>
  )
};
