const initialState = {
  tasks: [
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: false },
    { id: 3, text: "Task 3", completed: false },
  ],
  newTask: "",
  searchQuery: "",
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newId = Math.max(...state.tasks.map((task) => task.id)) + 1;
      const newTaskObj = { id: newId, text: action.payload, completed: false };
      return { ...state, tasks: [...state.tasks, newTaskObj], newTask: "" };

    case "EDIT_TASK":
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload.taskId) {
          return { ...task, text: action.payload.newText };
        }
        return task;
      });
      return { ...state, tasks: updatedTasks };

    case "DELETE_TASK":
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      return { ...state, tasks: filteredTasks };

    case "CLEAR_ALL_TASKS":
      return {
        ...state,
        tasks: [],
      };

    case "TOGGLE_TASK":
      const toggledTasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      return { ...state, tasks: toggledTasks };

    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SET_NEW_TASK":
      return { ...state, newTask: action.payload };

    case "SET_WEATHER_DATA":
      return { ...state, weatherData: action.payload };

    default:
      return state;
  }
};
