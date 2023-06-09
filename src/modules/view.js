import dragIcon from '../../images/icon.png';
import trashIcon from '../../images/trash.svg';

const notifier = document.querySelector('.notification');
const taskList = document.querySelector('.list div');

export const renderTasks = (tasks) => {
  const tasksMarkup = tasks
    .map(
      (task) => `
  <li class='task' id=${task.index} draggable="true">
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
    <img src="${dragIcon}" alt="drag icon" />
  </li>
`,
    )
    .join('');

  taskList.innerHTML = '';
  taskList.insertAdjacentHTML('beforeend', tasksMarkup);
};

export const clearField = (inputEl) => {
  inputEl.value = '';
  inputEl.blur();
};

export const markCompleted = (checkBox, tasks) => {
  const taskId = checkBox.closest('li').id;
  tasks.forEach((task) => {
    if (task.index !== +taskId) return;
    // completed set to true or false based on checkbox status
    task.completed = checkBox.checked;
  });
};

export const focusUpdate = (currTask, state) => {
  const focusIcon = currTask.lastElementChild;
  if (state === 'focus') {
    focusIcon.src = trashIcon;
    focusIcon.title = 'Delete todo';
    focusIcon.style.cursor = 'pointer';
  } else {
    focusIcon.src = dragIcon;
    focusIcon.style.cursor = 'move';
  }
};

export const notify = (type, message) => {
  notifier.textContent = message;
  notifier.style.backgroundColor = type === 'danger' ? 'red' : 'green';
  notifier.classList.add('show-notification');
  setTimeout(() => {
    notifier.classList.remove('show-notification');
  }, 3000);
};
