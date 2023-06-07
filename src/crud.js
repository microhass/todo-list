export const createTask = (description, tasks) => {
  const newTasks = [
    ...tasks,
    { index: tasks.length, description, completed: false },
  ];
  return newTasks;
};

export const deleteTasks = (tasks) => {
  // Remove completed
  const newTasks = [...tasks].filter((task) => !task.completed);

  // Update indices
  newTasks.forEach((task, index) => (task.index = index));
  return newTasks;
};

export const updateTask = (index, desc, tasks) => {
  const newTasks = [...tasks].map((task) => {
    if (task.index === index) task.description = desc;
    return task;
  });
  return newTasks;
};