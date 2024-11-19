import React from "react";

const TodoItem = ({ task, deleteTask, toggleTaskCompletion }) => {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
        />
        {task.text}
      </div>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
