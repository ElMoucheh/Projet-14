import React, { useState } from 'react';
import InputField from '../components/InputField';
import AddressSet from '../components/AddressSet';
import FormButton from '../components/FormButton';
import Modal from 'react-modal-bizwi';
import DatePicker from '../components/DatePicker';
import Dropdown from '../components/Dropdown';
import states from '../data/states';
import departmentOptions from '../data/departments';
import { useEmployeeData } from '../hooks/employeeData';
import '../assets/pages/CreateEmployee.scss';

// Page de création d'employés avec formulaire et gestion d'état
const CreateEmployee = () => {
  const { addEmployee } = useEmployeeData(); // Récupère la fonction pour ajouter un employé au contexte global
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [startDate, setStartDate] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [department, setDepartment] = useState('Sales'); // Valeur par défaut pour le département
  const [isModalOpen, setIsModalOpen] = useState(false); // Gère l'ouverture de la modal

  // Sauvegarde l'employé et réinitialise le formulaire
  const handleSaveEmployee = () => {
    const newEmployee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      street,
      city,
      state,
      zipCode,
      department,
    };

    addEmployee(newEmployee); // Ajoute l'employé au contexte global
    setIsModalOpen(true); // Ouvre la modal de confirmation
    
    // Réinitialise les champs du formulaire
    setFirstName('');
    setLastName('');
    setDateOfBirth('');
    setStartDate('');
    setStreet('');
    setCity('');
    setState('');
    setZipCode('');
    setDepartment('Sales');
  };

  return (
    <div className="create-employee-container">
      <h2>Create Employee</h2>
      <form id="create-employee" onSubmit={(e) => e.preventDefault()}> {/* Empêche le rechargement de la page */}
        {/* Champs de saisie du formulaire */}
        <InputField label="First Name" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <InputField label="Last Name" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        
        {/* Sélecteur de date de naissance */}
        <DatePicker
          label="Date of Birth"
          selectedDate={dateOfBirth}
          onChange={(date) => setDateOfBirth(date)}
        />

        {/* Sélecteur de date de début */}
        <DatePicker
          label="Start Date"
          selectedDate={startDate}
          onChange={(date) => setStartDate(date)}
        />

        {/* Ensemble de champs d'adresse */}
        <AddressSet
          street={street} setStreet={setStreet}
          city={city} setCity={setCity}
          state={state} setState={setState}
          zipCode={zipCode} setZipCode={setZipCode}
          stateOptions={states}
        />

        {/* Sélecteur de département */}
        <Dropdown
          label="Department"
          id="department"
          value={department}
          onChange={setDepartment}
          options={departmentOptions}
        />

        <FormButton onClick={handleSaveEmployee}>Save</FormButton> {/* Bouton pour sauvegarder l'employé */}
      </form>

      {/* Modal de confirmation d'ajout */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>Employee Created!</p>
      </Modal> 
    </div>
  );
};

export default CreateEmployee;
