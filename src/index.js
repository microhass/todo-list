import './style.css';
import icon from '../images/icon.png';

const taskList = document.querySelector('.list');

const tasks = [
  {
    index: 1,
    description: 'Wash the dishes',
    completed: false,
  },
  {
    index: 2,
    description: 'Complete To Do list projest',
    completed: false,
  },
];

const renderTasks = () => {
  const tasksMarkup = tasks
    .map(
      (task) => `
  <li class='task' id=${task.index}>
    <input type="checkbox" ${
      task.completed && 'checked'
    } name="check" id="check" />
    <form id="tasks">
      <input
        type="text"
        name="task"
        id="task"
        value="${task.description}"
      />
    </form>
    <img src="${icon}" alt="drag icon" />
  </li>
`
    )
    .join('');

  taskList.insertAdjacentHTML('beforeend', tasksMarkup);
};

window.addEventListener('DOMContentLoaded', renderTasks);
