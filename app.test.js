const getTasks = () =>
  JSON.parse(localStorage.getItem('todos')) || [];

const saveTasks = (tasks) => {
  localStorage.setItem('todos', JSON.stringify(tasks));
};

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

describe('My localStorage', () => {
  it('should store a todo in localStorage', () => {
    const tasks = [
      { index: 1, description: 'Complete testing', completed: false },
    ];
    saveTasks(tasks);
    expect(localStorage.setItem()).toHaveBeenCalled()
  });
});
