import React from 'react';

// Composant de champ de saisie générique
const InputField = ({ label, type = 'text', id, value, onChange }) => {
  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label> {/* Étiquette pour le champ de saisie */}
      <input type={type} id={id} value={value} onChange={onChange} /> {/* Champ de saisie avec gestion de valeur et de changement */}
    </div>
  );
};

export default InputField;
