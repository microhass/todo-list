export const getTasks = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const saveTasks = (tasks) => {
  localStorage.setItem('todos', JSON.stringify(tasks));
};
