import React from 'react'
import { NavLink } from 'react-router-dom'
import * as Icon from '@mui/icons-material/'

import styles from './NavItems.module.css'

const NavItems = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navLink}>
          <NavLink className={styles.navItem}>
            <Icon.SportsEsports fontSize="small" />
            <span>GEAR</span>
          </NavLink>
          <NavLink className={styles.navItem}>
            <Icon.DryCleaning fontSize="small" />
            <span>WEAR</span>
          </NavLink>
          <NavLink className={styles.navItem}>
            <Icon.ShoppingBag fontSize="small" />
            <span>ACESSÓRIOS</span>
          </NavLink>
        </div>
        <div className={styles.navLink}>
          <NavLink className={styles.navItem}>
            <Icon.Search fontSize="small" />
          </NavLink>
          <NavLink className={styles.navItem}>
            <Icon.Menu fontSize="small" />
          </NavLink>
          <NavLink className={styles.navItem}>
            <Icon.AccountCircle fontSize="small" />
          </NavLink>
          <NavLink className={styles.navItem}>
            <Icon.StarBorder fontSize="small" />
          </NavLink>
          <NavLink className={styles.navItem}>
            <Icon.ShoppingCart fontSize="small" />
          </NavLink>
        </div>
      </nav>
    </>
  )
}

export default NavItems