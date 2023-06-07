export const createTask = (description, tasks) => {
  const newTasks = [
    ...tasks,
    { index: tasks.length, description, completed: false },
  ];
  return newTasks;
};

export const removeTask = (index, tasks) => {
  const newTasks = [
    ...tasks,
    { index: tasks.length, description, completed: false },
  ];
  return newTasks;
};
