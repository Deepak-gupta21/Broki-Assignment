import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/loginpage/Loginpage.js';
import HomePage from './components/homepage/Homepage.js';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<LoginPage />} />
    </Routes>
  </Router>
  );
};

export default App;
