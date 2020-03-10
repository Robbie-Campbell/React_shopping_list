import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Components/Layout/Header'
import './App.css';
import Todos from './Components/Todos';
import about from './Components/pages/about';
import AddTodo from './Components/AddTodo';


class App extends Component {
  state = {
      todos: [
        {
          id: 1,
          title: 'Brush Teeth',
          completed: false
        },
        {
          id: 2,
          title: 'Buy Chicken',
          completed: false
        },
        {
          id: 3,
          title: 'Eat Rice',
          completed: false
        }
      ]
    }
    // Toggle complete on button click
    markComplete = (id) => {
      this.setState({todos:this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })})
  }
  //delete todo
delTodo = (id) => {
  this.setState({todos: [...this.state.todos.filter(todo => todo.id
    !== id)] });
}
addTodo = (title) => {
  const newTodo = {
    id: Math.floor(Math.random() * 100),
    title,
    completed: false
  }
  this.setState({todos: [...this.state.todos, newTodo]})
}


  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} markComplete=
            {this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
            <Route path = "/about" component={about} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
