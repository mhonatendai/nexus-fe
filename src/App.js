import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LoginForm from "./pages/login/LoginForm";

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </Router>
  );
};

export default App;