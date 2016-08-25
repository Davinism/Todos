import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.linkState = this.linkState.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  submitForm(event) {
    event.preventDefault();
    const temp = {todo: this.state};
    this.props.createTodo(temp);
    this.setState({
      title: "",
      body: "",
      done: false
    });
  }

  render() {
    return (
      <div className="todo-form">
        <label>
          Title:
          <input type='text'
            name='todo[title]'
            onChange={this.linkState('title')}
            value={this.state.title}
          />
        </label>

        <label>
          Body:
          <input type='text'
            name='todo[body]'
            onChange={this.linkState('body')}
            value={this.state.body}
          />
        </label>

        <button onClick={this.submitForm}>Create Todo</button>
      </div>
    );
  }
}

export default TodoForm;
