import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import '../assets/components/DatePicker.scss';

// Composant personnalisé pour un sélecteur de date
const DatePicker = ({ label, selectedDate, onChange }) => {
  const [date, setDate] = useState(selectedDate); // État local pour la date sélectionnée

  // Gère la sélection de date et déclenche la fonction `onChange` passée en prop
  const handleDateChange = (date) => {
    setDate(date);
    onChange(date);
  };

  return (
    <div className="date-picker">
      <label>{label}</label> {/* Affiche le libellé pour le champ de date */}
      <ReactDatePicker
        selected={date}                   // Date actuellement sélectionnée
        onChange={handleDateChange}       // Mise à jour de la date sélectionnée
        dateFormat="yyyy-MM-dd"           // Format d'affichage de la date
        placeholderText="Select a date"   // Texte de suggestion si aucune date n'est sélectionnée
        showMonthDropdown                 // Affiche un menu déroulant pour sélectionner le mois
        showYearDropdown                  // Affiche un menu déroulant pour sélectionner l'année
        dropdownMode="select"             // Permet de sélectionner le mois et l'année dans des listes déroulantes
      />
    </div>
  );
};

export default DatePicker;
