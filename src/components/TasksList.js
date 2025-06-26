import Task from "./Task";

/* 
const initialTasks = [
  {
    id: 0,
    description: "Pending Task 1",
    done: false,
  },
  {
    id: 1,
    description: "Pending Task 2",
    done: false,
  },
  {
    id: 2,
    description: "Pending Task 3",
    done: false,
  },
  {
    id: 3,
    description: "Pending Task 4",
    done: false,
  },
  {
    id: 4,
    description: "Finished Task",
    done: true,
  },
  {
    id: 5,
    description: "Finished Task",
    done: true,
  },
];
*/

export default function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <div className="taskList">
      <h2>Today</h2>
      <ul>
        {tasks.map((task) => (
          <Task
            task={task}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
}
