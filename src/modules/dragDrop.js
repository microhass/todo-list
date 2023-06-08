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
    { task: null, offset: Number.NEGATIVE_INFINITY }
  );

  return targetTask.task;
};

const reorderTopDown = (id1, id2, tasks) => {
  // console.log(id1, id2);
  const newTasks = [...tasks];
  for (let i = id1; i < id2 - 1; i++) {
    newTasks[i].index -= 1;
  }
  newTasks[id1 - 1].index = id2 - 1;
  return newTasks;
};
const reorderBottomUp = () => {};

export const reorderTasks = (droppedTaskId, taskBelowId, tasks) => {
  // Item was dropped in original position
  if (droppedTaskId === taskBelowId - 1) return;
  const newTasks =
    droppedTaskId < taskBelowId
      ? reorderTopDown(droppedTaskId, taskBelowId, tasks)
      : reorderBottomUp();

  return newTasks;
};
