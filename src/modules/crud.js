export const createTask = (description, tasks) => {
  const newTasks = [
    ...tasks,
    { index: tasks.length + 1, description, completed: false },
  ];
  return newTasks;
};

export const deleteTasks = (tasks) => {
  // Remove completed
  const newTasks = [...tasks].filter((task) => !task.completed);

  // Update indices
  newTasks.forEach((task, index) => {
    task.index = index + 1;
  });
  return newTasks;
};

export const updateTask = (index, desc, tasks) => {
  const newTasks = [...tasks].map((task) => {
    if (task.index === index) task.description = desc;
    return task;
  });
  return newTasks;
};

export const removeTask = (index, tasks) => {
  // Remove completed
  const newTasks = [...tasks].filter((task) => task.index !== index);

  // Update indices
  newTasks.forEach((task, index) => {
    task.index = index + 1;
  });
  return newTasks;
};
