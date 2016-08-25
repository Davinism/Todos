import React from 'react';
import ReactDOM from 'react-dom';
import { fetchTodos } from './util/todo_api_util';
import configureStore from './store/store';
import allTodos from './reducers/selector';
import { requestTodos, createTodo, receiveTodo } from './actions/todo_actions';
import Root from './components/root';
import merge from 'lodash/merge';


document.addEventListener("DOMContentLoaded", ()=> {
  const store = configureStore();
  const formattedTodos = allTodos(store.getState());

  window.merge = merge;
  window.createTodo = createTodo;
  window.receiveTodo = receiveTodo;
  window.allTodos = allTodos;
  window.store = store;
  window.requestTodos = requestTodos;
  window.formattedTodos = formattedTodos;

  const content = document.getElementById("content");
  ReactDOM.render(
    <Root store={store} />
  ,content);
});
