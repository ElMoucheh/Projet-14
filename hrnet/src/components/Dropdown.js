import React from 'react';
import Select from 'react-select';
import '../assets/components/Dropdown.scss';

// Composant Dropdown utilisant react-select pour un menu déroulant personnalisé
const Dropdown = ({ label, id, value, onChange, options, placeholder = "Select an option" }) => {
  return (
    <div className="dropdown">
      <label htmlFor={id}>{label}</label> {/* Étiquette pour le menu déroulant */}
      <Select
        id={id}                                                         // ID pour associer le champ et l'étiquette
        options={options}                                               // Options disponibles dans le menu déroulant
        value={options.find(option => option.value === value)}          // Option sélectionnée correspondant à la valeur
        onChange={(selectedOption) => onChange(selectedOption.value)}   // Met à jour la sélection et retourne la valeur de l'option
        placeholder={placeholder}                                       // Texte de suggestion si aucune option n'est sélectionnée
        className="react-select-container"                              // Classe CSS pour styliser le conteneur
        classNamePrefix="react-select"                                  // Préfixe pour les classes CSS internes de react-select
      />
    </div>
  );
};

export default Dropdown;
