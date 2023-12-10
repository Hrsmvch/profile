import React from 'react'
import Navigation from '../navigation/navigation'
import styles from './styles.module.scss';

interface propsData {
  title: string;
  subtitle: string; 
  isHome?: boolean;
}

export default function Header({title, subtitle, isHome}: propsData) {
  return (
    <>
      <Navigation />
      <div className={`${styles.section_dark} ${isHome ? styles.home : ''}`}>
        <div className={styles.container}>
          <div className={styles.header_content}>
            <div className={styles.header_title}>{title}</div>
            <div className={styles.header_subtitle}>{subtitle}</div>
          </div>
        </div>
      </div> 
    </>
  )
}
