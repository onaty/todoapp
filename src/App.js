import React, { Component } from 'react';
import Todos from './todos';
import AddTodo from './AddForm';

class App extends Component {
state={
  todos:[
    {id:1,content:'I need to buy milk'},
    {id:2,content:'I need to wash cloths'}
  ]
}


deleteTodo=(id)=>{
  console.log(id)

  let todos=this.state.todos.filter(todo=>{
    return todo.id!==id
  })

  this.setState({todos:todos})
}

addtodo=(todo)=>{
todo.id=Math.random()*1000
  var todo1 =[...this.state.todos,todo]
  console.log(todo1)
  console.log(todo)
  this.setState({
    todos:todo1
  })
}
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
       <Todos deletetodo={this.deleteTodo} todos={this.state.todos} />
       <AddTodo addtodo={this.addtodo} />
      </div>
    );
  }
}

export default App;
