import { setSearchQuery } from "@/redux/actions";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
export default function Search(props) {
  const { searchQuery } = props;
  const dispatch = useDispatch();

  const handleSearchQueryChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };
  return (
    <div>
      <div className="mt-[-20px] p-5">
        <input
          type="text"
          className="text-black w-full border rounded py-2 px-3 mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Search tasks"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
      </div>
    </div>
  );
}
