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
  switch (e.target.name) {
    case 'check':
      view.markCompleted(e.target, tasks);
      break;

    case 'task':
      const inputDesc = e.target;
      const currTask = inputDesc.closest('li');
      view.focusUpdate(currTask, 'focus');

      // Separate function to prevent adding a listener every time
      const listener = () => {
        const newDesc = inputDesc.value;
        tasks = myTodos.updateTask(+currTask.id, newDesc, tasks);
        view.focusUpdate(currTask, 'blur');
        return inputDesc.removeEventListener('blur', listener);
      };

      inputDesc.addEventListener('blur', listener);
      break;

    default:
      break;
  }
});

// Clear completed tasks
clearBtn.addEventListener('click', () => {
  tasks = myTodos.deleteTasks(tasks);
  view.renderTasks(tasks);
});
