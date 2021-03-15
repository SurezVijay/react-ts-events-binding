import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

interface IProps {}
interface IState {
  message: string;
}

class Card extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      message: "Hello"
    };
  }

  sayGoodMorning = () => {
    this.setState({ message: "Good Morning" });
  };

  render() {
    return (
      <div>
        <h3> Card Component </h3>
        <p> {this.state.message} </p>
        <button className="btn btn-primary" onClick={this.sayGoodMorning}>
          {" "}
          Say Morning{" "}
        </button>
      </div>
    );
  }
}

export default Card;
