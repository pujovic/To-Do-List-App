import React from "react";

import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

const TaskList = (props) => {
  return (
    <ul className="task-list">
      {props.items.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          onDelete={props.onDeleteItem}
          onDone={props.onDoneTask}
          done={task.done}
        >
          {task.text}
        </TaskItem>
      ))}
    </ul>
  );
};

export default TaskList;
