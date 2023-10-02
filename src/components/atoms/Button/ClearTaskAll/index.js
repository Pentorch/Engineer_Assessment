import { clearAllTasks } from "@/redux/actions";
import showMessage from "@/utils/showMessage";
import React from "react";
import { useDispatch } from "react-redux";

export default function ClearTaskAll() {
  const dispatch = useDispatch();
  const handleClearAllTasks = () => {
    showMessage({
      message: "Clear All Tasks?",
      type: "warning",
      text: "This will remove all tasks. Are you sure?",
      showConfirmButton: true,
      confirmButtonText: "Yes, clear all!",
      showCancelButton: true,
      cancelButtonText: "Cancel",
    }).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(clearAllTasks());
        showMessage({
          message: "All tasks have been cleared",
          type: "success",
        });
      }
    });
  };
  return (
    <div>
      <div
        className="text-red-500  hover:text-red-700   w-[140px] h-[40px] rounded-full mt-3 mr-[-20px] transition-all duration-300 ease-in-out"
        onClick={handleClearAllTasks}>
        Clear All Tasks....
      </div>
    </div>
  );
}
