import React, { Component } from "react";
class Counter extends Component {
  // state = {
  //   count: this.props.value,
  // };
  countFormatter = () => {
    let val =
      this.props.counter.value === 0 ? "zero" : this.props.counter.value;
    return val;
  };

  // handleIncrement = () => {
  //   this.setState({ this.props.value : this.props.value+ 1 });
  // };

  getClassBadge = () => {
    let className = "p-2 m-2 badge badge-";
    className += this.props.counter.value === 0 ? "warning" : "primary";
    return className;
  };

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span style={{ fontSize: 20 }} className={this.getClassBadge()}>
            {this.props.counter.value}
          </span>
        </div>
        <div className="col">
          <button
            style={{ fontSize: 20 }}
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm "
          >
            +
          </button>
          <button
            style={{ fontSize: 20 }}
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            -
          </button>
          <button
            style={{ fontSize: 20 }}
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
