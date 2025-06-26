export default function Task({ task, onToggleTask, onDeleteTask }) {
  return (
    <li>
      <div className="taskContent">
        <input
          type="checkbox"
          value={task.done}
          onChange={() => onToggleTask(task.id)}
        />
        <button onClick={() => onDeleteTask(task.id)}>❌</button>
        <span style={task.done ? { textDecoration: "line-through" } : {}}>
          {task.description}
        </span>
      </div>
    </li>
  );
}
