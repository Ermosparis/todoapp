import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

class Task extends Component {
  render() {
    return (
      <li className="task">
        <input value={this.props.text} disabled={this.props.status} readOnly />
        <button
          className="check-btn"
          onClick={this.props.checkBtnHandler.bind(this, this.props.id)}
        >
          <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} />
        </button>
        <button
          className="delete-btn"
          onClick={this.props.deletBtnHandler.bind(this, this.props.id)}
        >
          <FontAwesomeIcon icon={faTrashAlt} style={{ color: "red" }} />
        </button>
      </li>
    );
  }
}
export default Task;
