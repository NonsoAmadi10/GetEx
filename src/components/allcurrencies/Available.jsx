/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Available extends Component {
    
  render() {
  const values = Object.entries(this.props.data.results).map(([keys, values]) => {
      return (
          <div key={ values.id}>
           <span>{ keys }</span> ___________ <span>{ values.currencyName }</span>
          </div>
      )
  })




    return (

      <div className="getCurrencies">
         <h2 className="yellow"> Available Currencies</h2>
           { values }
        </div>
    );
  }
}

// eslint-disable-next-line react/no-typos

export default Available;
