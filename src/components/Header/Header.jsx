import React from 'react';
import styles from './Header.module.css';

export const Header = ({ children }) => {
  return (
    <header
      className={styles.header}>
      <span>PhotoStock</span>
      { children }
    </header>
  )
}