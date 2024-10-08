import React from 'react';

const TaskList = ({ tasks, onComplete, onDelete, listType }) => {
  if (tasks.length === 0) {
    return <p>{listType === 'pending' ? "Currently you have no tasks" : "You have not completed any tasks"}</p>;
  }

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <input 
            type="checkbox" 
            checked={task.completed} 
            onChange={() => onComplete(task.id)} 
          />
          {task.name}
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
