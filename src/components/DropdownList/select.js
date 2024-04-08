import React, { Component } from 'react'

export default class select extends Component {

    constructor() {
        super();
        this.state = {
            division1 : "Dhaka",
            division2 : "Rajshahi",
            division3 : "Shylet",
            division4 : "Barishal",
            division5 : "Dinajpur",
            division6 : "Rangpur",
            show : " "
        }
    }

    onChangeHandler = (e) => {
        let selected = e.target.value;
        this.setState({show : selected});
    } 

  render() {
    return (
      <div style={{textAlign: "center", fontSize: "35px"}}>
        <h5>Select your division?</h5>
        <select onChange={this.onChangeHandler}>
            <option>{this.state.division1}</option>
            <option>{this.state.division2}</option>
            <option>{this.state.division3}</option>
            <option>{this.state.division4}</option>
            <option>{this.state.division5}</option>
            <option>{this.state.division6}</option>
        </select>
        <br />
        <p>You are selected division : {this.state.show}</p>
      </div>
      
    )
  }
}
