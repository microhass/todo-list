import * as view from './view.js';
import * as myTodos from './crud.js';
import './style.css';

const todoForm = document.querySelector('#todo-form');
const listContainer = document.querySelector('.list');
const clearBtn = document.querySelector('#clear');

let tasks = [];

window.addEventListener(
  'DOMContentLoaded',
  view.renderTasks.bind(null, tasks)
);

// Create Todo
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTodo = todoForm.querySelector('input');
  tasks = myTodos.createTask(newTodo.value, tasks);
  view.renderTasks(tasks);
  view.clearField(newTodo);
});

// Mark task as completed
listContainer.addEventListener('click', (e) => {
  if (e.target.name !== 'check') return;
  view.markCompleted(e.target, tasks);
});

// Clear completed tasks
clearBtn.addEventListener('click', () => {
  tasks = myTodos.deleteTasks(tasks)
  view.renderTasks(tasks);
});
