import './style.css';

const taskList = document.querySelector('.list');

const tasks = [
  {
    index: 1,
    description: 'Lorem ipsum adipisicing elit.',
    completed: false,
  },
  {
    index: 2,
    description: 'Lorem ipsum dolor, sit amet elit. Harum!',
    completed: true,
  },
  {
    index: 3,
    description: 'Lorem ipsum adipisicing elit.',
    completed: false,
  },
];

const renderTasks = () => {
  const tasksMarkup = tasks
    .map(
      (task) => `
  <li id=${task.index}>
    <input type="checkbox" ${
      task.completed && 'checked'
    } name="check" id="check" />
    <span>${task.description}</span>
    <img src="./images/icon.png" alt="drag icon" />
  </li>
`
    )
    .join('');

  taskList.insertAdjacentHTML('beforeend', tasksMarkup);
};

window.addEventListener('DOMContentLoaded', renderTasks);
