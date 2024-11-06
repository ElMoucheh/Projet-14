import React from 'react';

// Composant de bouton générique pour les formulaires
const FormButton = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick}> {/* Bouton sans rechargement de page */}
      {children} {/* Contenu du bouton (texte ou éléments) */}
    </button>
  );
};

export default FormButton;
