const getTaskBelow = (mousePosition) => {
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

export default getTaskBelow;
