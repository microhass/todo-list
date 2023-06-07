import * as view from './view.js';
import * as myTodos from './crud.js';
import './style.css';

const todoForm = document.querySelector('#todo-form');
let tasks = [];

todoForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const newTodo = todoForm.querySelector('input')
  tasks = myTodos.addTask(newTodo.value, tasks)
  view.renderTasks(tasks)
  view.clearField(newTodo)
});

window.addEventListener(
  'DOMContentLoaded',
  view.renderTasks.bind(null, tasks)
);
