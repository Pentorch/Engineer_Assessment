import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../../../redux/actions";
import showMessage from "@/utils/showMessage";

export default function EditTaskModal(props) {
  const dispatch = useDispatch();
  const { taskId, initialText, setEditingTask } = props;
  const [text, setText] = useState(initialText);

  const handleEditSave = (taskId, newText) => {
    dispatch(editTask(taskId, newText));
  };

  const handleEditCancel = () => {
    setEditingTask(null);
  };

  const handleSave = () => {
    handleEditSave(taskId, text);
    showMessage({
      message: "Task saved successfully",
      type: "success",
      timer: 2000,
      showConfirmButton: false,
      showCancelButton: false,
    }).then(() => {
      handleEditCancel();
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-4 rounded-lg shadow-md z-10">
        <h2 className="text-lg font-semibold mb-4">Edit Task</h2>
        <textarea
          className="text-black w-full border rounded p-2 mb-2"
          rows="3"
          value={text}
          onChange={(e) => setText(e.target.value)}></textarea>
        <div className="text-right">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
            onClick={handleSave}>
            Save
          </button>
          <button
            className="text-gray-500 hover:text-gray-700 py-2 px-4 rounded"
            onClick={handleEditCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
