import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Routes>
          <Route path="/pending" element={<TaskManager listType="pending" />} />
          <Route path="/completed" element={<TaskManager listType="completed" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;