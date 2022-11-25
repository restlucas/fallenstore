import React from 'react'
import { NavLink } from 'react-router-dom'

import { SportsEsports, DryCleaning, ShoppingBag, Search, Menu, AccountCircle, StarBorder, ShoppingCart } from '@mui/icons-material/'

import styles from './NavItems.module.css'

const NavItems = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navLink}>
          <NavLink className={styles.navItem}>
            <SportsEsports fontSize="small" />
            <span>GEAR</span>
          </NavLink>
          <NavLink className={styles.navItem}>
            <DryCleaning fontSize="small" />
            <span>WEAR</span>
          </NavLink>
          <NavLink className={styles.navItem}>
            <ShoppingBag fontSize="small" />
            <span>ACESSÓRIOS</span>
          </NavLink>
        </div>
        <div className={styles.navLink}>
          <NavLink className={styles.navItem}>
            <Search fontSize="small" />
          </NavLink>
          <NavLink className={styles.navItem}>
            <Menu fontSize="small" />
          </NavLink>
          <NavLink className={styles.navItem}>
            <AccountCircle fontSize="small" />
          </NavLink>
          <NavLink className={styles.navItem}>
            <StarBorder fontSize="small" />
          </NavLink>
          <NavLink className={styles.navItem}>
            <ShoppingCart fontSize="small" />
          </NavLink>
        </div>
      </nav>
    </>
  )
}

export default NavItems