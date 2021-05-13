import logo from './logo.svg';
import './App.css';
import { TodoList } from './components/TodoList';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      taskList: [
        { task: 'Correr', timeSpent: '00:20' },
        { task: 'Correr', timeSpent: '00:20' },
      ],
    };
  }

  saveData() {
    const newTask = document.querySelector('#task').value;
    const newTimeSpent = document.querySelector('#timeSpent').value;
    console.log(newTask, newTimeSpent);
    this.setState({
      taskList: [
        ...this.state.taskList,
        { task: newTask, timeSpent: newTimeSpent },
      ],
    });
  }
  render() {
    return (
      <div>
        <TodoList
          onSaveData={() => this.saveData()}
          tasks={this.state.taskList}
          timeSpentList={this.state.timeSpentList}
        />
      </div>
    );
  }
}

export default App;
