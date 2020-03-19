import React, { Component } from "react";
import ReactDOM from 'react-dom';
import styles from './Modal.modules.css'

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
      <div className={styles.modalWindow} >
        <button onClick={this.props.onClose}> Close </button>
        <h4>Modal Window</h4>
        {this.props.children}
      </div>,
      this.root
    );
  }
}
