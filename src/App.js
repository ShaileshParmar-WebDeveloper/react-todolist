import { useState } from "react";
import "./App.css";
import AddTask from "./component/AddTask";
import Header from "./component/Header";
import Tasks from "./component/Tasks";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2.30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1.30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shoing",
      day: "Feb 5th at 5.30pm",
      reminder: false,
    },
  ]);
  //Add Task
  const onAdd = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //onToggle
  const onToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header
        onAddTask={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask onAdd={onAdd} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={onToggle} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
