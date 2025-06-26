export default function Footer({ tasks }) {
  if (!tasks.length)
    return (
      <p className="footer">
        <em>Start adding some tasks to your packing list 🚀</em>
      </p>
    );

  const numTasks = tasks.length;
  const numDone = tasks.filter((task) => task.done).length;
  const percentage = Math.round((numDone / numTasks) * 100);

  return (
    <div className="footer">
      <em>
        {percentage === 100
          ? "Congrats! You're all done for the day 👍"
          : `You have ${numTasks} tasks pending on your list, and you already finished ${numDone} (${percentage}%)`}
      </em>
    </div>
  );
}
