import { useState, createContext, useContext } from 'react';

// Création du contexte pour les données des employés
const EmployeeContext = createContext();

// Fournisseur de contexte qui stocke et met à jour la liste des employés
export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]); // État pour stocker les employés

  // Fonction pour ajouter un employé à la liste
  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]); // Ajoute l'employé sans modifier l'état d'origine
  };

  return (
    // Fournit `employees` et `addEmployee` aux composants enfants
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

// Hook personnalisé pour accéder au contexte des employés
export const useEmployeeData = () => {
  return useContext(EmployeeContext); // Permet aux composants d'accéder aux données des employés
};
