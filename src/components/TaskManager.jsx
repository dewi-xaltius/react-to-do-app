import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import Modal from './Modal';

const TaskManager = ({ listType }) => {
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addTask = (name) => {
    
      const newTask = { id: Date.now(), name, completed: false };
      setTasks([...tasks, newTask]);
      setIsModalVisible(true);
      
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

  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <TaskForm onAddTask={addTask} />
      <TaskList 
        tasks={listType === 'pending' ? tasks.filter(task => !task.completed) : tasks.filter(task => task.completed)} 
        onComplete={toggleTaskCompleted} 
        onDelete={deleteTask} 
        listType={listType}
      />
      <Modal 
        isShowing={isModalVisible} 
        hide={hideModal} 
        message="Task has been successfully added to Pending Tasks"
      />
    </div>
  );
};

export default TaskManager;