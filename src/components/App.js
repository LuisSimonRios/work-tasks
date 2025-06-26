import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import TaskList from "./TasksList";
import Footer from "./Footer";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTasks(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleToggleTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function handleDeleteTask(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmed) setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleClearTasks() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all tasks?"
    );
    if (confirmed) setTasks([]);
  }

  return (
    <div>
      <Header />
      <Form onAddTasks={handleAddTasks} onClearTasks={handleClearTasks} />
      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
      <Footer tasks={tasks} />
    </div>
  );
}
