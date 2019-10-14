import React, { Component } from 'react';
import axios from 'axios';
import Available from './allcurrencies/Available';
import GetExchange from './getExchangeRate/getExchange';

export default class index extends Component {

  constructor() {
    super()
    this.state = {
        isLoading: false,
      currencies: {},
      rate:{},
      postDone: false,
    };
  }


  componentDidMount() {
    axios.get('https://free.currconv.com/api/v7/currencies?apiKey=ea1cc45d2fec8725afda')
      .then(data => this.setState({ currencies: data.data, isLoading: true }))
      .catch(err => console.log(err))

  }

  getExchange =(base, required) => {
      const fromCurrency = encodeURIComponent(base);
      const toCurrency = encodeURIComponent(required);
   axios.get(`https://free.currconv.com/api/v7/convert?q=${fromCurrency}_${toCurrency}&compact=ultra&apiKey=ea1cc45d2fec8725afda`)
     .then( data => this.setState({ rate: data.data, postDone: true }))
  }




  render() {
    return (
      <div className="exchange">
        <GetExchange getExchange ={this.getExchange} rate={ this.state.rate } postDone={ this.state.postDone }/>
        { this.state.isLoading ? <Available data={this.state.currencies} /> : <p>Fetching List Of Currencies..</p> }

       
      </div>
    );
  }
}




