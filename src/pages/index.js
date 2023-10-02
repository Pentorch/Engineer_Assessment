import { useState } from "react";
import TableTodo from "@/components/molecules/Table";
import HeaderBar from "@/components/molecules/HeaderBar";

const TodoApp = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen py-8 p-4 sm:p-8 lg:p-12 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      } text-black`}>
      <div className=" max-w-md mx-auto bg-white shadow-lg rounded-lg p-4">
        <div className="bg-gray-100 py-8">
          <div>
            <h1 className="text-3xl font-bold text-center">Todo App</h1>
            <HeaderBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          </div>
          <TableTodo />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
