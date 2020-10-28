import React, { Component } from "react";
import "./Todolist.css";
import Task from "../Task/Task";

class ToDoList extends Component {
  render() {
    let tasks = this.props.tasks;
    return (
      <ul className="todo-list">
        {tasks.map((task) => {
          return (
            <Task
              text={task.text}
              key={task.id}
              id={task.id}
              status={task.completed}
              deletBtnHandler={this.props.deletBtnHandler}
              checkBtnHandler={this.props.checkBtnHandler}
            />
          );
        })}
      </ul>
    );
  }
}

export default ToDoList;
