import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false
    };
  }

  handleMouseOver = () => {
    this.setState({
      mouseOver: true
    });
  };

  render() {
    const mouseOver = this.state.mouseOver;
    let style = {
      margin: 0,
      position: "absolute",
      top: "50%",
      left: "50%"
    };
    if (mouseOver) {
      style = {
        ...style,
        top: Math.random() * 200 + "px",
        left: Math.random() * 200 + "px"
      };
    }
    return (
      <div>
        <button style={style} onMouseEnter={this.handleMouseOver}>
          Click me
        </button>
      </div>
    );
  }
}

export default App;
