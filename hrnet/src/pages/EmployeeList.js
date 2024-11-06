import React, { useMemo } from 'react';
import DataTable from '../components/DataTable';
import { useEmployeeData } from '../hooks/employeeData';
import '../assets/pages/EmployeeList.scss';

// Page de liste des employés qui affiche les données sous forme de tableau
const EmployeeList = () => {
  const { employees } = useEmployeeData(); // Récupère la liste des employés depuis le contexte global

  // Définition des colonnes du tableau avec useMemo pour éviter les recalculs inutiles
  const columns = useMemo(
    () => [
      { Header: 'First Name', accessor: 'firstName' },
      { Header: 'Last Name', accessor: 'lastName' },
      {
        Header: 'Date of Birth',
        accessor: 'dateOfBirth',
        // Formate la date de naissance en chaîne lisible si la valeur est une date
        Cell: ({ value }) => (value instanceof Date ? value.toLocaleDateString() : value),
      },
      {
        Header: 'Start Date',
        accessor: 'startDate',
        // Formate la date de début en chaîne lisible si la valeur est une date
        Cell: ({ value }) => (value instanceof Date ? value.toLocaleDateString() : value),
      },
      { Header: 'Department', accessor: 'department' },
      { Header: 'Street', accessor: 'street' },
      { Header: 'City', accessor: 'city' },
      { Header: 'State', accessor: 'state' },
      { Header: 'Zip Code', accessor: 'zipCode' },
    ],
    []
  );

  return (
    <div className="employee-list-container">
      <h2>Employee List</h2>
      {/* Affiche les données des employés dans un tableau avec les colonnes définies */}
      <DataTable columns={columns} data={employees} />
    </div>
  );
};

export default EmployeeList;
