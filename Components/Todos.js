import React, { Component } from 'react';
import Todoitem from './Todoitem';
import propTypes from 'prop-types';

class Todos extends Component {
    markComplete = () =>{

    }
        render() {
            return this.props.todos.map((todo) => (
            <Todoitem key={todo.id} todo={todo} 
            markComplete={this.props.markComplete}
            delTodo={this.props.delTodo}/>
        ));
    }
    }

Todos.propTypes ={
    todos: propTypes.array
}

export default Todos;
