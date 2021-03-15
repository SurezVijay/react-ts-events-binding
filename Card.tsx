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
      message: "Good"
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
          Gud Mrg
        </button>
        <button className="btn btn-success "> Gud Noon </button>
        <button className="btn btn-danger "> Gud Nyt </button>
      </div>
    );
  }
}

export default Card;
