import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { deleteTask, toggleTask } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import EditTaskModal from "@/components/atoms/Modal";
import showMessage from "@/utils/showMessage";
export default function TableTodo() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const searchQuery = useSelector((state) => state.searchQuery);
  const [editingTask, setEditingTask] = useState(null);

  const handleEditClick = (taskId, initialText) => {
    setEditingTask({ taskId, initialText });
  };

  const handleDeleteTask = (taskId) => {
    showMessage({
      message: "Are you sure?",
      type: "warning",
      text: "You will not be able to recover this task!",
      showConfirmButton: true,
      confirmButtonText: "Yes, delete it!",
      showCancelButton: true,
      cancelButtonText: "Cancel",
    }).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(deleteTask(taskId));
        showMessage({
          message: "The task has been deleted",
          type: "success",
        });
      }
    });
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };
  const filteredTasks = tasks?.filter((task) =>
    task.text?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  );
  return (
    <div>
      <ul className="space-y-2 text-black p-5 mt-[-30px]">
        {filteredTasks?.length === 0 ? (
          <p>There are no tasks to display.</p>
        ) : (
          <ul>
            {filteredTasks?.map((task) => (
              <li
                key={task?.id}
                className={`bg-white shadow-md rounded py-2 px-3 mb-1 transition-transform ${
                  task.completed
                    ? "line-through text-gray-500 transform scale-95"
                    : ""
                }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-black">
                    <input
                      type="checkbox"
                      checked={task?.completed}
                      onChange={() => handleToggleTask(task?.id)}
                      className="mr-2"
                    />
                    <span
                      className={`${task?.completed ? "line-through" : ""}`}>
                      {task?.text}
                    </span>
                  </div>
                  <div>
                    <button
                      className="text-blue-500 hover:underline mr-2 focus:outline-none"
                      onClick={() => handleEditClick(task?.id, task?.text)}>
                      <FontAwesomeIcon icon={faPencilAlt} />
                    </button>
                    <button
                      className="text-red-500 hover:underline focus:outline-none"
                      onClick={() => handleDeleteTask(task?.id)}>
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </ul>
      {editingTask && (
        <EditTaskModal
          taskId={editingTask.taskId}
          initialText={editingTask.initialText}
          setEditingTask={setEditingTask}
        />
      )}
    </div>
  );
}
