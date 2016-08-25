import React from 'react';

class TodoListItem extends React.Component {
  constructor(props){
    super(props);

    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(event) {
    event.preventDefault();
    this.props.destroyTodo(this.props.todo);
  }

  render () {
    return (
      <li>
        {this.props.todo.title}
        <button onClick={this.removeItem}>Remove</button>
      </li>
    );
  }
}

export default TodoListItem;
