import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
  }

  print() {
    return (
      <p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
    );
  }
  render() {
    return (
      <div id="main">
        <button
          id="click"
          onClick={() => {
            this.setState({ display: true });
          }}
        >
          Button
        </button>
        {this.state.display ? this.print() : ""}
        {/* Do not remove this main div!! */}
      </div>
    );
  }
}

export default App;
