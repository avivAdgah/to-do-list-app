import React from "react";
import "./style/SearchBar.css";

export default function SearchBar({
  newTask,
  handleChange,
  addTask,
  handleKeyPress,
}) {
  return (
    <div className="search-warpper">
      <input
        className="search-text"
        type="text"
        value={newTask}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="add a new task.."
      />
      <button className="search-button" onClick={addTask}>
        ADD
      </button>
    </div>
  );
}
