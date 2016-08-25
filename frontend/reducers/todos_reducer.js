import { TODO_CONSTANTS } from '../actions/todo_actions';
import merge from 'lodash/merge';

const TodosReducer = (state = {}, action) => {
  const frozenState = Object.freeze(state);
  switch (action.type) {
    case TODO_CONSTANTS.RECEIVE_TODOS:
      return action.todos;
    case TODO_CONSTANTS.RECEIVE_TODO:
      let temp = {};
      temp[action.todo.id - 1] = action.todo;
      // temp[action.todo.id] = action.todo;
      return merge(temp, frozenState);
    case TODO_CONSTANTS.REMOVE_TODO:
      temp = merge({}, frozenState);
      delete temp[action.todo.id - 1];
      // delete temp[action.todo.id];
      return temp;
    default:
      return frozenState;
  }
};

export default TodosReducer;
