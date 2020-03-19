import React, { Component } from "react";
import ReactDOM from 'react-dom';

export default class Modal extends Component {
  UNSAFE_componentWillMount() {
    this.root = document.createElement("div");
    document.body.appendChild(this.root);
  }
  componentWillUnmount() {
    document.body.removeChild(this.root);
  }
  render() {
    return ReactDOM.createPortal(
      <div>
        <button onClick={this.props.onClose}> Close </button>
        <h1>Modal Window</h1>
        {this.props.children}
      </div>,
      this.root
    );
  }
}
