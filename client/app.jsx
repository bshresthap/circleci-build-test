
import React from "react";
import ReactDOM from "react-dom";
import EvenOdd from './EvenOdd.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      result: '',

    };

  }

  render() {
    return (
      <div>
        <EvenOdd input={this.state.input} result={this.state.result} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


