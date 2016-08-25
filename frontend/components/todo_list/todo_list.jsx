import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const todoList = this.props.todos.map( item => {
      return <TodoListItem toggleTodo={this.props.toggleTodo}
                          destroyTodo={this.props.destroyTodo}
                          key={item.id} todo={item} />;
    });

    return (
      <div>
        <ul>
          {todoList}
        </ul>
        <TodoForm createTodo={this.props.createTodo}/>
      </div>
    );
  }
 }

export default TodoList;
