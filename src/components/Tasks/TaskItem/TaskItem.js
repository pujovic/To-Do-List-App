import React, { useEffect, useState } from "react";

import "./TaskItem.css";
import Button from "../../UI/Button/Button";

const TaskItem = (props) => {
  const [isDone, setIsDone] = useState("task-item");
  useEffect(() => {
    setIsDone(props.done ? "task-item done" : "task-item");
  }, []);
  const doneHandler = () => {
    props.onDone(props.id);
    if (isDone === "task-item") {
      setIsDone("task-item done");
    } else {
      setIsDone("task-item");
    }
  };

  const deleteItemHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="list-item-box">
      <li className={isDone} onClick={doneHandler}>
        {props.children}
      </li>
      <Button onClick={deleteItemHandler} styles="delete">
        X
      </Button>
    </div>
  );
};

export default TaskItem;
