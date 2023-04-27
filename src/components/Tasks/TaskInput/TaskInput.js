import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./TaskInput.module.css";

const TaskInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const taskInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddTask(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Add Task</label>
        <input
          value={enteredValue}
          type="text"
          onChange={taskInputChangeHandler}
        />
      </div>
      <Button type="submit">Add</Button>
    </form>
  );
};

export default TaskInput;
