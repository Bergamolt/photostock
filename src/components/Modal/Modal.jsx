import React from 'react';
import './Modal.css';

export const Modal = ({active, onActive, children}) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => onActive(false)}>
      <div className={active ? 'modal-content active' : 'modal-content'}>
        {children}
      </div>
    </div>
  )
};