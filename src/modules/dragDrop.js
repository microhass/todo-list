export const getTaskBelow = (mousePosition) => {
  const currTasks = [
    ...document.querySelectorAll('.task:not(.dragging)'),
  ];

  const targetTask = currTasks.reduce(
    (closestEl, currTask) => {
      const { height, top } = currTask.getBoundingClientRect();
      const midPoint = top - height / 2;
      const currOffset = mousePosition - midPoint - height;

      return currOffset < 0 && currOffset > closestEl.offset
        ? { task: currTask, offset: currOffset }
        : closestEl;
    },
    { task: null, offset: Number.NEGATIVE_INFINITY },
  );

  return targetTask.task;
};

const orderTasksInAscending = (tasks) => {
  const orderedTasks = [];
  tasks.forEach((task) => {
    orderedTasks[task.index - 1] = task;
  });
  return orderedTasks;
};

// Dragging from top going down the list
const reorderTopDown = (id1, id2, tasks) => {
  const newTasks = [...tasks];
  for (let i = id1; i < id2 - 1; i += 1) {
    newTasks[i].index -= 1;
  }
  newTasks[id1 - 1].index = id2 - 1;
  const orderedTasks = orderTasksInAscending(newTasks);
  return orderedTasks;
};

// Dragging from bottom going up the list
const reorderBottomUp = (id1, id2, tasks) => {
  const newTasks = [...tasks];
  newTasks[id1 - 1].index = id2;
  for (let i = id2 - 1; i < id1 - 1; i += 1) {
    newTasks[i].index += 1;
  }

  const orderedTasks = orderTasksInAscending(newTasks);
  return orderedTasks;
};

export const reorderTasks = (droppedTaskId, taskBelowId, tasks) => {
  // Item was dropped in original position
  if (droppedTaskId === taskBelowId - 1) return tasks;
  const newTasks = droppedTaskId < taskBelowId
    ? reorderTopDown(droppedTaskId, taskBelowId, tasks)
    : reorderBottomUp(droppedTaskId, taskBelowId, tasks);

  return newTasks;
};
