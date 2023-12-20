import React from 'react'
import styles from './styles.module.scss';

export default function ProfileTabContent() {
  return null
  return (
    <>
       <div className={styles.section}>
              <div className={styles.heading}>
                <h3>Summery</h3>
              </div>
              <div className={styles.items}>
                <textarea name="summery"></textarea>

                <div className={styles.label}>Image</div>
                <input type="file" />

                <div className={styles.label}>CV</div>
                <input type="file" />
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.heading}>
                <h3>Work experience</h3>
              </div>
              <div className={styles.items}>
                <button>Add new</button>

                <div className={styles.work_exp}>
                  <div className={styles.index}>1 | </div>
                  <input type="text" placeholder="23. June 2020 - present" />
                  <input type="text" placeholder="Front-end developer" />
                  <input type="text" placeholder="Company inc." />
                  <input type="text" placeholder="Description" />
                </div>
                <div className={styles.work_exp}>
                  <div className={styles.index}>2 | </div>
                  <input
                    type="text"
                    value={"23. June 2020 - 14 January 2024"}
                    placeholder="23. June 2020 - present"
                  />
                  <input
                    type="text"
                    value={"Front-end developer"}
                    placeholder="Front-end developer"
                  />
                  <input type="text" value={"Tallium Inc."} placeholder="" />
                  <input type="text" placeholder="Description" />
                </div>
                <div className={styles.work_exp}>
                  <div className={styles.index}>3 | </div>
                  <input
                    type="text"
                    value={"13. June 2020 - 10 January 2024"}
                    placeholder="23. June 2020 - present"
                  />
                  <input
                    type="text"
                    value={"Back-end developer"}
                    placeholder="Front-end developer"
                  />
                  <input type="text" value={"Sphere.TO"} placeholder="" />
                  <input type="text" placeholder="Description" />
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.heading}>
                <h3>Courses</h3>
              </div>
              <div className={styles.items}>
                <div className={styles.course_item}>
                  <div className={styles.index}>1 | </div>
                  <input type="text" placeholder="Course name" />
                  <input type="text" placeholder="Small description" />
                  <input type="file" />
                </div>

                <div className={styles.course_item}>
                  <div className={styles.index}>2 | </div>
                  <input type="text" placeholder="Course name" />
                  <input type="text" placeholder="Small description" />
                  <input type="file" />
                </div>

                <div className={styles.course_item}>
                  <div className={styles.index}>3 | </div>
                  <input type="text" placeholder="Course name" />
                  <input type="text" placeholder="Small description" />
                  <input type="file" />
                </div>
              </div>
            </div>
    </>
  )
}
