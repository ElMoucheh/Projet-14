import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';
import { EmployeeProvider } from './hooks/employeeData';
import './App.css';

// Composant principal qui configure le contexte global et les routes
function App() {
  return (
    <EmployeeProvider> {/* Fournit un contexte global pour les données des employés */}
      <Router> {/* Active la gestion des routes */}
        <div className="App">
          <Navbar /> {/* Barre de navigation en haut de chaque page */}
          <Routes>
            <Route path="/" element={<CreateEmployee />} /> {/* Page de création d'employés */}
            <Route path="/employee-list" element={<EmployeeList />} /> {/* Page pour afficher la liste des employés */}
          </Routes>
        </div>
      </Router>
    </EmployeeProvider>
  );
}

export default App;
