// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { EmployeProvider } from './context';
import Navbar from './navbar';
import ListEmp from './list';
import FomEmp from './form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
function App() {
  return (
    <Router>
      {/* 1. EmployeProvider enveloppe l'ensemble de l'application */}
      <EmployeProvider>
        <Navbar />
        <div className="container-fluid">
          {/* 2. Définition des Routes */}
          <Routes>
            <Route path="/list" element={<ListEmp />} />
            <Route path="/add" element={<FomEmp />} />
            {/* Route pour l'édition avec un paramètre d'ID */}
            <Route path="/edit/:id" element={<FomEmp />} />
            {/* Route par défaut (redirige vers la liste) */}
            <Route path="*" element={<Navigate to="/list" />} />
          </Routes>
        </div>
      </EmployeProvider>
    </Router>
  );
}

export default App;