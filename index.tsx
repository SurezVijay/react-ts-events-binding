import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import Card from "./Card";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Card />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
