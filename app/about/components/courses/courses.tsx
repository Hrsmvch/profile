import React from 'react'
import styles from './styles.module.scss';


const Courses = () => {
  return (
    <section className={styles.courses}>
        <div className={styles.container}>
          <div className={styles.courses_content}>
            <div className={styles.heading}>Courses</div>
            <div className={styles.course_item}>
              <div className={styles.course_info}>
                “Full course on JavaScript + React - from scratch to result” <span>- online course on udemy.com</span>
              </div>

              <a href={'!'} download="course_certificate.jpg" className={styles.certificate}>
                Check certificate
                 {/* <ViewIcon /> */}
              </a> 
            </div> 

            <div className={styles.course_item}>
              <div className={styles.course_info}>
              “Complete React Developer in 2023 (w/ Redux, Hooks, GraphQL)” <span>- online course on udemy.com. Created by Andrei Neagoie & Yihua Zhang.</span>
              </div>

              {/* <a href={Cerificate_course_1} download="course_certificate.jpg" className={styles.certificate}>
                Check certificate <ViewIcon />
              </a>  */}

              <div className={styles.certificate}>(In progress...)</div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Courses