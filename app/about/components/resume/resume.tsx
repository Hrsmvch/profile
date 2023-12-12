import React from 'react'
import styles from './styles.module.scss';


const Resume = () => {
  return (
    <section className={styles.download_resume}>
    <div className={styles.container}>
      <div className={styles.resume_wrapper}>
        <a href={'!'} download="harasymovych_resume.pdf" className={styles.resume_btn}>Download resume in PDF</a>
      </div>
    </div>
  </section>
  )
}

export default Resume