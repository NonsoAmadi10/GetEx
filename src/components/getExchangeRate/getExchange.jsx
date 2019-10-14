import React, { Component } from 'react'

class GetExchange extends Component {
 state ={
     base: '',
     required: ''
 }

 onChange=(e) => {
return this.setState({ [e.target.name]: e.target.value })
 }

 onSubmit =(e) => {
  e.preventDefault()
  this.props.getExchange(this.state.base, this.state.required)
  this.setState({ base: '', required: ''})
 }

    render() {
        const data = Object.values(this.props.rate).map((item) => {
            return item;
        })



        return (
            <div className="get">
                <form onSubmit= {this.onSubmit}>
                <span> <input type="text"
                 name="base"
                 placeholder="Base Currency"
                 value={this.state.base}
                 onChange={this.onChange}
                /> </span>
                 <span> <input type="text"
                 name="required"
                  placeholder="Required Currency"
                   value={this.state.required}
                   onChange={this.onChange}
                 />
                    </span>
                    <p>
                    <button type="submit"> Get Rate</button>
                    </p>
                </form>

                <div className="biggie">
                { this.props.postDone? <p className="yellow"> Current Exchange Rate is: { data } </p> : <p>Enter Currency from the list of available currencies </p> }
                </div>
            </div>
        )
    }
}

export default GetExchange;
