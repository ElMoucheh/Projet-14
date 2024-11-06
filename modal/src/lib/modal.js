import React, { useEffect } from 'react';
import './modal.scss';

const Modal = ({ isOpen, onClose, children}) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleClickOutside = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClickOutside}>
      <div className="modal">
        <div className="modal-content">
            <button className="close-modal" onClick={onClose} aria-label="Close modal">X</button>
            {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;