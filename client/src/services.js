export function saveToStorage(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

export function loadFromStorage(name) {
  try {
    return JSON.parse(localStorage.getItem(name))
  } catch (error) {
    console.log(error.message)
  }
}
