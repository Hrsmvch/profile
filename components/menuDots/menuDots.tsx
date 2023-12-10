import React from 'react'
import styles from './styles.module.scss'

interface MenuData {
  openedMenu: boolean; 
  handleMenuOpen: (opened: boolean) => void; 
}

const MenuDots = ({openedMenu, handleMenuOpen}: MenuData) => {
  return (
    <div className={`${styles.dots} ${openedMenu ? `${styles.opened}` : ''}`} onClick={() => handleMenuOpen(!openedMenu)}>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
    </div>
  )
}

export default MenuDots