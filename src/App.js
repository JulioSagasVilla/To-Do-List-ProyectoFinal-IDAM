import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import AddTask from './screens/AddTask';
import TaskList from './screens/TaskList';
import TaskDetails from './screens/TaskDetails';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksFromStorage = JSON.parse(localStorage.getItem('tasks'));
    if (tasksFromStorage) {
      setTasks(tasksFromStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completada: true } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen tasks={tasks} />} />
        <Route path="/add-task" element={<AddTask addTask={addTask} />} />
        <Route
          path="/tasks"
          element={
            <TaskList
              tasks={tasks}
              completeTask={completeTask}
              deleteTask={deleteTask}
            />
          }
        />
        <Route path="/tasks/:id" element={<TaskDetails tasks={tasks} />} />
      </Routes>
    </Router>
  );
}

export default App;