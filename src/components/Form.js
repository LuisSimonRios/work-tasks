import { useState } from "react";

export default function Form({ onAddTasks, onClearTasks }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newTask = { description, done: false, id: Date.now() };
    onAddTasks(newTask);

    setDescription("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Add New Task</label>
      <input
        type="text"
        placeholder=""
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>ADD</button>
      <button onClick={onClearTasks}>CLEAR</button>
    </form>
  );
}
