import React, { Component, setState } from "react";
import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  handleClick = () => {
    this.setState({
      text: `Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy`
    });
  };

  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.handleClick}>
          Button
        </button>
        <p id="para">{this.text}</p>

        {/* Do not remove this main div!! */}
      </div>
    );
  }
}

export default App;
