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
      status: "All",
    };
    this.inputTextHandler = this.inputTextHandler.bind(this);
    this.clickAddBtnHandler = this.clickAddBtnHandler.bind(this);
    this.deletBtnHandler = this.deletBtnHandler.bind(this);
    this.checkBtnHandler = this.checkBtnHandler.bind(this);
    this.filterHandler = this.filterHandler.bind(this);
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
    });
  }
  deletBtnHandler(id) {
    let tasks = this.state.tasks;
    this.setState({
      tasks: tasks.filter((task) => task.id !== id),
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
  }

  filterHandler(e) {
    // CANT RESOLVE
    this.setState({
      status: e.target.value,
    });
  }

  render() {
    console.log(this.state.status);
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
