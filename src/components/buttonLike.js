import React, { Component } from "react";

class ButtonLike extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { counter: 0 };
  }
  handleClick() {
    this.setState({ counter: ++this.state.counter });
  }
  render() {
    return (
      <div>
        <Button counter={this.state.counter} handler={this.handleClick} />
      </div>
    );
  }
}
class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handler}>like</button>
        <span>{this.props.counter}</span>
      </div>
    );
  }
}
export default ButtonLike;
