export const addTask = (description, tasks) => {
  const newTasks = [
    ...tasks,
    { index: tasks.length, description, completed: false },
  ];
  return newTasks;
};

export const removeTask = (description, tasks) => {
  const newTasks = [
    ...tasks,
    { index: tasks.length, description, completed: false },
  ];
  return newTasks;
};
