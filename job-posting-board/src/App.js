import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Index from './components/Auth/index'
import Login from './components/common/Login'

function App() {

  
  return (
    <Router>
      <Routes>
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Index/>} />
        <Route path="/login" element={<Login/>} />
        
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
