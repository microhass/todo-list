import * as view from './modules/view.js';
import * as myTodos from './modules/crud.js';
import * as storage from './modules/storage.js';
import './style.css';

const todoForm = document.querySelector('#todo-form');
const listContainer = document.querySelector('.list');
const clearBtn = document.querySelector('#clear');
const todoFormSubmitBtn = document.querySelector('#todo-form + img');

let tasks;

window.addEventListener('DOMContentLoaded', () => {
  tasks = storage.getTasks();
  view.renderTasks(tasks);
  // view.renderTasks.bind(null, tasks);
});

const createTodo = () => {
  const newTodo = todoForm.querySelector('input');
  if (newTodo.value.trim() === '') return;
  tasks = myTodos.createTask(newTodo.value, tasks);
  view.renderTasks(tasks);
  view.clearField(newTodo);
  storage.saveTasks(tasks);
};

// Create Todo
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createTodo();
});

todoFormSubmitBtn.addEventListener('click', createTodo);

// Mark task as completed
listContainer.addEventListener('click', (e) => {
  if (e.target.name === 'check') {
    view.markCompleted(e.target, tasks);
    storage.saveTasks(tasks);
    return;
  }

  if (e.target.name === 'task') {
    const inputDesc = e.target;
    const currTask = inputDesc.closest('li');
    view.focusUpdate(currTask, 'focus');

    // Separate function to prevent adding a listener every time
    const listener = () => {
      const newDesc = inputDesc.value;

      if (newDesc.trim() === '') {
        tasks = myTodos.removeTask(+currTask.id, tasks);
        view.renderTasks(tasks);
      } else {
        tasks = myTodos.updateTask(+currTask.id, newDesc, tasks);
      }

      view.focusUpdate(currTask, 'blur');
      storage.saveTasks(tasks);

      return inputDesc.removeEventListener('blur', listener);
    };

    inputDesc.addEventListener('blur', listener);
  }
});

// Clear completed tasks
clearBtn.addEventListener('click', () => {
  tasks = myTodos.deleteTasks(tasks);
  view.renderTasks(tasks);
  storage.saveTasks(tasks);
});
