import React, { useState } from 'react';
import styles from './TopButton.module.css';

export const TopButton = ({ onClick }) => {

  const [active, setActive] = useState(false);

  window.addEventListener('scroll', () => {
    if (window.innerHeight <= window.scrollY) {
      setActive(true);
    } else {
      setActive(false);
    }
  })

  return (
    <div>
      <button 
        className={active ? styles.btnTop : {...styles.btnTo, ...styles.hide}} 
        onClick={onClick}>
        TOP
      </button>
    </div>
  )
};