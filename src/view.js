import dragIcon from '../images/icon.png';
import trashIcon from '../images/trash.svg';

const taskList = document.querySelector('.list div');

export const renderTasks = (tasks) => {
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
    <img src="${dragIcon}" alt="drag icon" />
  </li>
`
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
  // Strike through the task
  const completedTodo = checkBox.nextElementSibling.firstElementChild;

  checkBox.checked
    ? completedTodo.classList.add('completed')
    : completedTodo.classList.remove('completed');

  // Mark task in list as completed
  const taskId = completedTodo.closest('li').id;
  tasks.forEach((task) => {
    if (task.index !== +taskId) return;
    task.completed = checkBox.checked;
  });
};

export const focusUpdate = (currTask, state) => {
  const focusIcon = currTask.lastElementChild;
  if (state === 'focus') {
    focusIcon.src = trashIcon;
    focusIcon.style.cursor = 'pointer';
  } else {
    focusIcon.src = dragIcon;
    focusIcon.style.cursor = 'move';
  }
};