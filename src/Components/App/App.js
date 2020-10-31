import React from "react";
import "./App.css";
import Form from "../Form/Form";
import ToDoList from "../ToDoList/ToDoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      tasks: [],
      completedTasks: [],
      uncompletedTasks: [],
    };
    this.inputTextHandler = this.inputTextHandler.bind(this);
    this.clickAddBtnHandler = this.clickAddBtnHandler.bind(this);
    this.deletBtnHandler = this.deletBtnHandler.bind(this);
    this.checkBtnHandler = this.checkBtnHandler.bind(this);
    this.filterHandler = this.filterHandler.bind(this);
    this.completedTasks = this.completedTasks.bind(this);
  }

  completedTasks() {
    this.setState({
      completedTasks: this.state.tasks.filter((task) => {
        return task.completed === true;
      }),
      uncompletedTasks: this.state.tasks.filter((task) => {
        return task.completed === false;
      }),
    });
  }

  inputTextHandler(e) {
    let input = e.target.value;
    this.setState({
      inputText: input,
    });
  }
  clickAddBtnHandler(e) {
    e.preventDefault();
    let tasks = this.state.tasks;
    this.setState({
      tasks: [
        ...tasks,
        {
          text: this.state.inputText,
          id: Math.random() * 1000,
          completed: false,
        },
      ],
      inputText: "",
      uncompletedTasks: setTimeout(() => {
        this.setState({
          uncompletedTasks: this.state.tasks.filter(
            (task) => task.completed === false
          ),
        });
      }, 2000),
    });
    console.log(this.state.uncompletedTasks);
  }

  deletBtnHandler(id) {
    let tasks = this.state.tasks;
    let completedTasks = this.state.completedTasks;
    let uncompletedTasks = this.state.uncompletedTasks;
    this.setState({
      tasks: tasks.filter((task) => task.id !== id),
      completedTasks: completedTasks.filter((task) => task.id !== id),
      uncompletedTasks: uncompletedTasks.filter((task) => task.id !== id),
    });
  }
  checkBtnHandler(id) {
    let tasks = this.state.tasks;
    for (let task of tasks) {
      if (task.id === id) {
        task.completed = !task.completed;
      }
    }
    this.setState({
      tasks: tasks,
    });
    this.completedTasks();
  }

  filterHandler(e) {
    let tasks = this.state.tasks;
    let completedTasks = this.state.completedTasks;
    let uncompletedTasks = this.state.uncompletedTasks;

    console.log(tasks);
    console.log(completedTasks);
    console.log(uncompletedTasks);

    if (e.target.value === "All") {
      this.setState({
        tasks: [...completedTasks, ...uncompletedTasks],
      });
    }
    if (e.target.value === "completed") {
      this.setState({
        tasks: [...completedTasks.filter((task) => task.completed === true)],
      });
    }
    if (e.target.value === "uncompleted") {
      this.setState({
        tasks: [...uncompletedTasks.filter((task) => task.completed === false)],
      });
    }
  }

  render() {
    return (
      <div>
        <header className="App">
          <h1>To Do App</h1>
        </header>
        <main>
          <Form
            onChange={this.inputTextHandler}
            input={this.state.inputText}
            onClick={this.clickAddBtnHandler}
            select={this.filterHandler}
          />
          <ToDoList
            tasks={this.state.tasks}
            input={this.state.inputText}
            deletBtnHandler={this.deletBtnHandler}
            checkBtnHandler={this.checkBtnHandler}
          />
        </main>
      </div>
    );
  }
}

export default App;
