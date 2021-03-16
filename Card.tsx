import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

interface IProduct {
  sno: number;
  item: string;
  quantity: number;
  total: number;
}

interface IProps {}
interface IState {
  product: IProduct;
  message: string;
}

class Card extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      message: "Good Morning",
      product: {
        sno: 1,
        item: "Watch",
        quantity: 1,
        total: 500
      }
    };
  }

  sayGoodMorning = () => {
    this.setState({ message: "Good Morning" });
  };

  sayGoodAfternoon = msg => {
    this.setState({ message: msg });
  };

  incrQTY = () => {
    this.setState({
      product: {
        ...this.state.product,
        quantity: this.state.product.quantity + 1
      }
    });
  };

  decrQTY = () => {
    this.setState({
      product: {
        ...this.state.product,
        quantity:
          this.state.product.quantity - 1 > 0
            ? this.state.product.quantity - 1
            : 1
      }
    });
  };

  render() {
    let { product } = this.state;

    return (
      <div>
        <h3> Card Component </h3>
        <p> {this.state.message} </p>
        <button className="btn btn-primary mr-2" onClick={this.sayGoodMorning}>
          Say Morning
        </button>
        <button
          className="btn btn-success mr-2"
          onClick={this.sayGoodAfternoon.bind(this, "Good Afternoon")}
        >
          Say Afternoon
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.setState({ message: "Good Evening" });
          }}
        >
          Say Evening
        </button>
        <table className="table mt-5 table-hover table-striped table-bordered text-center">
          <thead className="text-uppercase">
            <tr>
              <th> SNO </th>
              <th> Product </th>
              <th> Quantity </th>
              <th> Total </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> {product.sno} </td>
              <td> {product.item} </td>
              <td>
                {" "}
                <i className="p-2" onClick={this.incrQTY}>
                  {" "}
                  +{" "}
                </i>{" "}
                {product.quantity}{" "}
                <i className="p-2" onClick={this.decrQTY}>
                  {" "}
                  -{" "}
                </i>{" "}
              </td>
              <td> {product.quantity * 1000} </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Card;
