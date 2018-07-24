import React, { Component } from 'react';


export default class CardShirt extends Component {
  render() {
    const { allShirts, checkedShirt, changeShirt } = this.props;
    return(
      <section>
        <ul>
          {
            allShirts.map((elem,i) => (
                <li key ={ i } >
                  <img src={elem} onClick = { ()=>{ changeShirt(elem) } }/>
                </li>
              )
            )
          }
        </ul>
      </section>
    )
  }
}
