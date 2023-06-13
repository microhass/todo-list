import { getTasks, saveTasks } from './../src/modules/storage';
import LocalStorageMock from './mocks/localStorage';
global.localStorage = LocalStorageMock

describe('Saving & Accessing from the local storage', ()=>{
    const tasks = [
      {
        index: 1,
        description: 'Complete testing',
        completed: false,
      },
    ];
    
    it('should save to local storage', () => {
      saveTasks(tasks);
      const savedTasks = JSON.parse(localStorage.getItem('todos'));
      expect(savedTasks).toEqual(tasks);
    });

    it('should get todos from local storage', () => {
      const savedTasks = getTasks();
      expect(savedTasks).toEqual(tasks);
    });
})

