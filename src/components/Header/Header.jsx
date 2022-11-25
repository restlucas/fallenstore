import React from 'react'
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';
import styles from './Header.module.css';
import NavItems from '../NavItems/NavItems';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/" aria-label="FallenStore - Home">
        <img src={logo} alt="FallenStore - Home" />
      </Link>
      <NavItems />
    </header>
  )
}

export default Header