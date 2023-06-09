import * as view from './modules/view.js';
import * as myTodos from './modules/crud.js';
import * as storage from './modules/storage.js';
import * as dragDrop from './modules/dragDrop.js';
import './modules/themer.js';
import './style.css';

const todoForm = document.querySelector('#todo-form');
const listContainer = document.querySelector('.list div');
const clearBtn = document.querySelector('#clear');
const todoFormSubmitBtn = document.querySelector('#todo-form + img');

let tasks;
let dragTask;
let taskBelow;

const createTodo = () => {
  const newTodo = todoForm.querySelector('input');
  if (newTodo.value.trim() === '') return;
  tasks = myTodos.createTask(newTodo.value, tasks);
  view.notify('success', 'Todo added successfully!');
  view.renderTasks(tasks);
  view.clearField(newTodo);
  storage.saveTasks(tasks);
};

// Handle task editing functionality
const taskClickHandler = (e) => {
  const inputDesc = e.target;
  const currTask = inputDesc.closest('li');
  const taskForm = currTask.querySelector('form');
  view.focusUpdate(currTask, 'focus');

  // Separate function to prevent adding a listener every time
  const taskSubmitHandler = (e) => {
    e.preventDefault();
    const newDesc = inputDesc.value;

    if (newDesc.trim() === '') {
      tasks = myTodos.removeTask(+currTask.id, tasks);
      view.notify('danger', 'Todo removed successfully!');
    } else {
      tasks = myTodos.updateTask(+currTask.id, newDesc, tasks);
      view.notify('success', 'Todo updated successfully!');
    }

    view.focusUpdate(currTask, 'blur');
    view.renderTasks(tasks);
    storage.saveTasks(tasks);

    // Cleanup
    return inputDesc.removeEventListener('blur', taskSubmitHandler);
  };

  // Revert changes if form is not submited
  const revertChanges = () => {
    // To allow for deleting before trashIcon is removed from DOM
    setTimeout(() => {
      view.renderTasks(tasks);

      // Cleanup
      return inputDesc.removeEventListener('blur', revertChanges);
    }, 500);
  };

  taskForm.addEventListener('submit', taskSubmitHandler);
  inputDesc.addEventListener('blur', revertChanges);
};

window.addEventListener('DOMContentLoaded', () => {
  tasks = storage.getTasks();
  view.renderTasks(tasks);
});

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
    taskClickHandler(e);
    return;
  }

  if (e.target.title === 'Delete todo') {
    const currTask = e.target.closest('li');
    tasks = myTodos.removeTask(+currTask.id, tasks);
    view.focusUpdate(currTask, 'blur');
    view.notify('danger', 'Todo deleted successfully!');
    view.renderTasks(tasks);
    storage.saveTasks(tasks);
  }
});

// Clear completed tasks
clearBtn.addEventListener('click', () => {
  tasks = myTodos.deleteTasks(tasks);
  view.notify('success', 'Cleared completed todos!');
  view.renderTasks(tasks);
  storage.saveTasks(tasks);
});

listContainer.addEventListener('dragstart', (e) => {
  dragTask = e.target.closest('li');
  dragTask.classList.add('dragging');
});

listContainer.addEventListener('dragover', (e) => {
  e.preventDefault();
  const dragPosition = e.y;
  taskBelow = dragDrop.getTaskBelow(dragPosition);

  return !taskBelow
    ? listContainer.appendChild(dragTask)
    : listContainer.insertBefore(dragTask, taskBelow);
});

listContainer.addEventListener('dragend', () => {
  dragTask.classList.remove('dragging');
});

listContainer.addEventListener('drop', () => {
  const droppedTaskId = dragTask.id;
  const taskBelowId = taskBelow === null ? tasks.length + 1 : taskBelow.id;

  tasks = dragDrop.reorderTasks(+droppedTaskId, +taskBelowId, tasks);
  view.notify('success', 'Todos reordered');
  view.renderTasks(tasks);
  storage.saveTasks(tasks);
});
