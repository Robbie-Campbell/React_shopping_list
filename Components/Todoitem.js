import React, { Component } from 'react'
import propTypes from 'prop-types';

export class Todoitem extends Component {
    getStyle = () => {
        return {

            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #CCC dotted',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }
    
    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p style={{marginLeft:'20px'}}>
                    <input type="checkbox" onChange={this.props.markComplete
                    . bind(this, id)} /> {'    '}
                    {title} 
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
                
            </div>
        )
    }
}

Todoitem.propTypes ={
    todos: propTypes.object
}

const btnStyle = {
    background: '#FF0000',
    color: '#FFF',
    border: 'none',
    padding: '3px 8px',
    borderRadius: '50%',
    float: 'right',
    cursor: 'pointer'
}

export default Todoitem;
