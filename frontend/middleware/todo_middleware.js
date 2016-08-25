import { TODO_CONSTANTS,
          requestTodos,
          receiveTodos,
          receiveTodo,
          removeTodo } from '../actions/todo_actions';

import { fetchTodos,
          createTodo,
          updateTodo,
          destroyTodo } from '../util/todo_api_util';

const TodoMiddleware = store => next => action => {
  switch (action.type) {
    case TODO_CONSTANTS.REQUEST_TODOS:
      const success = data => store.dispatch(receiveTodos(data));
      fetchTodos(success);
      break;
    case TODO_CONSTANTS.CREATE_TODO:
      const success1 = data => store.dispatch(receiveTodo(data));
      createTodo(action.todo, success1);
      break;
    case TODO_CONSTANTS.UPDATE_TODO:
      const success2 = data => store.dispatch(receiveTodo(data));
      updateTodo(action.todo, success2);
      break;
    case TODO_CONSTANTS.DESTROY_TODO:
      const success3 = data => store.dispatch(removeTodo(data));
      destroyTodo(action.todo, success3);
      break;
    default:
      return next(action);
  }
};

export default TodoMiddleware;
