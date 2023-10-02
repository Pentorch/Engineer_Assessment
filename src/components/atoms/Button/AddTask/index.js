import showMessage from "@/utils/showMessage";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../../../redux/actions";

export default function AddTask() {
  const dispatch = useDispatch();
  const newTask = useSelector((state) => state.newTask);

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      dispatch(addTask(newTask));
      showMessage({
        message: "Task Added",
        type: "success",
        text: "The task has been successfully added.",
      });
    } else {
      showMessage({
        message: "Invalid Task",
        type: "error",
        text: "Please enter a valid task before adding.",
      });
    }
  };
  return (
    <div>
      <div className="flex p-5">
        <input
          type="text"
          className="flex-1 border rounded py-2 px-3 mr-2 focus:outline-none focus:border-blue-500 text-slate-950"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) =>
            dispatch({ type: "SET_NEW_TASK", payload: e.target.value })
          }
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
          onClick={handleAddTask}>
          Add Task
        </button>
      </div>
    </div>
  );
}
