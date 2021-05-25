
import React from "react";

class EvenOdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: props.inputNumber,
      result: props.result,
      valid: true
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.checkEvenOrOdd = this.checkEvenOrOdd.bind(this);
  }

  //check if it is even or odd or invalid
  checkEvenOrOdd(event) {
    event.preventDefault();
    if (this.state.valid) {
      if (this.state.input % 2 === 0) {
        this.setState({ result: 'Even number' });
      } else {
        this.setState({ result: 'Odd number' });
      }
    } else {
      this.setState({ result: 'Invalid value' });
    }
  }

  //update state with number entered
  handleInputChange(event) {
    let input = event.target.value;
    if (!Number(input)) {
      this.setState({ valid: false });
      return;
    }
    this.setState({ input: event.target.value });
    this.setState({ valid: true });
  }

  render() {
    return (
      <div>
        <br />
        <label>Enter number:</label>
        <input type="text" id="number" name="inputNumber" placeholder="Enter Number" value={this.state.value} onChange={this.handleInputChange}></input> <br />
        <button id="btnCheckEvent" onClick={this.checkEvenOrOdd}>Check</button><br /><br />
        <label>Result:</label><br />
        <label id="result">{this.state.result}</label>
      </div>
    );
  }
}

export default EvenOdd;