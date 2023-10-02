import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
export default function ToggleDarkMode(props) {
  const { isDarkMode, setIsDarkMode } = props;
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <button
        className={`${
          isDarkMode
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-300 hover:bg-gray-400"
        } text-white px-2 py-1 w-[40px] h-[40px] rounded-full ml-4 transition-all duration-300 ease-in-out`}
        onClick={toggleDarkMode}>
        {isDarkMode ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </button>
    </div>
  );
}
