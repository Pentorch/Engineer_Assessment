export const addTask = (newTask) => ({
  type: "ADD_TASK",
  payload: newTask,
});

export const editTask = (taskId, newText) => ({
  type: "EDIT_TASK",
  payload: { taskId, newText },
});

export const deleteTask = (taskId) => ({
  type: "DELETE_TASK",
  payload: taskId,
});

export const clearAllTasks = () => ({
  type: "CLEAR_ALL_TASKS",
});

export const toggleTask = (taskId) => ({
  type: "TOGGLE_TASK",
  payload: taskId,
});

export const setSearchQuery = (query) => ({
  type: "SET_SEARCH_QUERY",
  payload: query,
});

export const setNewTask = (newTask) => ({
  type: "SET_NEW_TASK",
  payload: newTask,
});

export const setWeatherData = (data) => ({
  type: "SET_WEATHER_DATA",
  payload: data,
});
