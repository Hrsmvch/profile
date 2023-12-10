'use client'
import React from 'react'
import styles from './styles.module.scss'
import { useRouter } from 'next/navigation' 


const HomeNav = () => {
  const router = useRouter();
  return (
    <nav className={styles.home_nav}>
      <div onClick={() => router.push('/about')}>
        <span>About</span>
        {/* <img src={aboutMeImage} alt="Halyna Harasymovych" /> */}
      </div>
      <div onClick={() => router.push('/projects')}>
        <span>Projects</span>
        {/* <img src={projectsImage} alt="Projects" /> */}
      </div>
      <div onClick={() => router.push('/blog')}>
        <span>Blog</span>
        {/* <img src={blogImage} alt="Blog" /> */}
      </div>
      <div onClick={() => router.push('/contacts')}>
        <span>Contact</span>
        {/* <img src={contactImage} alt="Contact" /> */}
      </div>
    </nav>
  )
}

export default HomeNav