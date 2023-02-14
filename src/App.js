import React, { useEffect, useState } from "react";

import TaskList from "./components/Tasks/TaskList/TaskList";
import TaskInput from "./components/Tasks/TaskInput/TaskInput";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("to-do-tasks"))) {
      setTasks(JSON.parse(localStorage.getItem("to-do-tasks")));
    } else {
      setTasks([]);
    }
  }, []);

  const addTaskHandler = (enteredText) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      let id = Math.random().toString();
      updatedTasks.unshift({ text: enteredText, id: id, done: false });
      localStorage.setItem("to-do-tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const deleteItemHandler = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      localStorage.setItem("to-do-tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const doneTaskHandler = (taskId) => {
    setTasks((prevTasks) => {
      const theDoneOne = prevTasks.findIndex((task) => task.id === taskId);
      const updatedTasks = [...prevTasks];

      if (updatedTasks[theDoneOne].done === false) {
        updatedTasks[theDoneOne].done = true;
      } else {
        updatedTasks[theDoneOne].done = false;
      }

      localStorage.setItem("to-do-tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  let content = <p style={{ textAlign: "center" }}>No tasks yet.</p>;

  if (tasks.length > 0) {
    content = (
      <TaskList
        items={tasks}
        onDeleteItem={deleteItemHandler}
        onDoneTask={doneTaskHandler}
      />
    );
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <section id="task-form">
        <TaskInput onAddTask={addTaskHandler} />
      </section>
      <section id="tasks">{content}</section>
    </div>
  );
};

export default App;
