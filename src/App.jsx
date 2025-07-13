import './App.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (name) => {
    const newTask = { id: Date.now(), name, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter(task => task.id !== id);
    setTasks(remainingTasks);
  };

  return (
    <Router>
      <div className="App">
        <AppHeader />
        <TaskForm onAddTask={addTask} />
        <Routes>
          <Route 
            path="/pending" 
            element={
              <TaskList 
                tasks={tasks.filter(task => !task.completed)} 
                onComplete={toggleTaskCompleted}
                onDelete={deleteTask}
                listType="pending" 
              />
            } 
          />
          <Route 
            path="/completed" 
            element={
              <TaskList 
                tasks={tasks.filter(task => task.completed)} 
                onComplete={toggleTaskCompleted}
                onDelete={deleteTask}
                listType="completed" 
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;