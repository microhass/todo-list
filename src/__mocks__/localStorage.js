class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
    console.log('mock');
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
