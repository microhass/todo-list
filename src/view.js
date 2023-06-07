import icon from '../images/icon.png';

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
    <img src="${icon}" alt="drag icon" />
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

export const markCompleted = (checkBox) => {
    const completedTodo =
      checkBox.nextElementSibling.firstElementChild;
    checkBox.checked
      ? completedTodo.classList.add('completed')
      : completedTodo.classList.remove('completed');
}
