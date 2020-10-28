import React, { Component } from "react";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

class Form extends Component {
  render() {
    return (
      <div>
        <form className="form">
          <input
            value={this.props.input}
            className="input-field"
            onChange={this.props.onChange}
          />
          <button onClick={this.props.onClick} className="add-btn">
            <FontAwesomeIcon icon={faPlusCircle} style={{ color: "green" }} />
          </button>
          <select className="select" onChange={this.props.select}>
            <option value="All">All</option>
            <option value="true">Completed</option>
            <option value="false">Not Completed</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Form;
