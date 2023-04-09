export const getStorageByKey = (key: string) => JSON.parse(localStorage.getItem(key) || '""');

export const setStorageByKey = <T>(value: T, key: string) =>
  localStorage.setItem(key, JSON.stringify(value));
