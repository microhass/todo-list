import { createTask, deleteTasks } from './../src/modules/crud';

describe('Tasks can be added and deleted from the array', () => {
  describe('Add tasks', () => {
    test('should add new task to the array', () => {
      const tasks = [];
      const description = 'Complete testing';
      const newTasks = createTask(description, tasks);
      expect(newTasks).toHaveLength(1);
      expect(newTasks[0].description).toBe('Complete testing');
    });

    test('should add to the exixting tasks', () => {
      const tasks = [
        {
          index: 1,
          description: 'Complete testing',
          completed: false,
        },
      ];
      const description = 'Second item in tasks';
      const newTasks = createTask(description, tasks);
      expect(newTasks).toHaveLength(2);
      expect(newTasks[1].index).toBe(2);
    });
  });

  describe('Delete tasks', () => {
    test('should remove a task from the array', () => {
      const tasks = [
        {
          index: 1,
          description: 'Complete testing',
          completed: false,
        },
        {
          index: 2,
          description: 'Second item in tasks',
          completed: true,
        },
      ];
      const newTasks = deleteTasks(tasks);
      expect(newTasks).toHaveLength(1);
      expect(newTasks[0]).toEqual(tasks[0]);
    });

    test('should return empty array if all are completed', () => {
      const tasks = [
        {
          index: 1,
          description: 'Complete testing',
          completed: true,
        },
      ];
      const newTasks = deleteTasks(tasks);
      expect(newTasks).toHaveLength(0);
      expect(newTasks[0]).toBe(undefined);
    });
  });
});
