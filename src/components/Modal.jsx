import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.modules.css";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.root = document.createElement("div");
    document.body.appendChild(this.root);
  }
  componentWillUnmount() {
    document.body.removeChild(this.root);
  }
  render() {
    return ReactDOM.createPortal(
      <div className={styles.modalWindow} onClick={() => this.props.toggleModal({})}>
        {this.props.children}
      </div>,
      this.root
    );
  }
}
