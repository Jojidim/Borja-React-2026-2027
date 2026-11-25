export function loadData(key, fallback) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
}

export function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}