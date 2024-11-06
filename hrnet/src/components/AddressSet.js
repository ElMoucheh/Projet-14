import React from 'react';
import InputField from './InputField';
import Dropdown from './Dropdown';

// Composant pour saisir l'adresse d'un employé
const AddressSet = ({ street, setStreet, city, setCity, state, setState, zipCode, setZipCode, stateOptions }) => {
  return (
    <fieldset className="address-fieldset">
      <legend>Address</legend>
      
      {/* Champ de saisie pour la rue */}
      <InputField label="Street" id="street" value={street} onChange={(e) => setStreet(e.target.value)} />

      {/* Champ de saisie pour la ville */}
      <InputField label="City" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
      
      {/* Menu déroulant pour sélectionner l'État */}
      <Dropdown
        label="State"
        id="state"
        value={state}
        onChange={setState}
        options={stateOptions} // Liste des États fournie en prop
      />
      
      {/* Champ de saisie pour le code postal */}
      <InputField label="Zip Code" id="zip-code" type="number" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
    </fieldset>
  );
};

export default AddressSet;
