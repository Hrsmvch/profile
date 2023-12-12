import React from 'react'
import styles from './styles.module.scss';


const WorkExperience = () => {
  return (
    <section className={styles.experience}>
        <div className={styles.container}>
          <div className={styles.experience_content}>
            <div className={styles.heading}>Work experience</div>
            <div className={styles.work_experience}>
              <div className={styles.period}>Aug. 2020 - present</div>
              <div className={styles.experience_info}>
                <div className={styles.position}>
                  Front-end developer | Tallium Inc.
                </div>
                <div className={styles.summery}>
                  Deliver high-quality, robust production code for a diverse
                  array of projects for clients including Switch, Pagescout,
                  Ilovetobe, Ems-Schiers, Skinrock, Quetzal, ESim.
                </div>
                <div className={styles.stack}>
                  <div className={styles.stack_item}>HTML</div>
                  <div className={styles.stack_item}>SCSS</div>
                  <div className={styles.stack_item}>JavaScript</div>
                  <div className={styles.stack_item}>WordPress</div>
                  <div className={styles.stack_item}>NPM</div>
                  <div className={styles.stack_item}>React</div>
                  <div className={styles.stack_item}>Redux</div>
                  <div className={styles.stack_item}>RTK</div>
                  <div className={styles.stack_item}>TypeScript</div>
                  <div className={styles.stack_item}>Next.js</div>
                </div>
              </div>
            </div>

            <div className={styles.work_experience}>
              <div className={styles.period}>Oct. 2019 – June 2020</div>
              <div className={styles.experience_info}>
                <div className={styles.position}>
                  HTML Developer | Aweb Systems
                </div>
                <div className={styles.summery}>
                  Developed, maintained, and shipped production code for client
                  websites. Site administration.
                </div>
                <div className={styles.stack}>
                  <div className={styles.stack_item}>HTML</div>
                  <div className={styles.stack_item}>CSS</div>
                  <div className={styles.stack_item}>SASS</div>
                  <div className={styles.stack_item}>JavaScript</div>
                  <div className={styles.stack_item}>Bootstrap</div>
                  <div className={styles.stack_item}>WebPack</div>
                  <div className={styles.stack_item}>JQuery</div>
                </div>
              </div>
            </div>

            <div className={styles.work_summary}>
              Thanks for exploring my portfolio and taking time to discover my
              story. If you're interested, feel free to browse through
              {" "}<a href={'#!'}>my works</a> and see the
              creative projects I've made. I'm always open to new opportunities
              and collaborations, so don't hesitate to reach out and get in
              touch. Let's connect and turn your ideas into extraordinary
              digital experiences!
            </div>
          </div>
        </div>
      </section>
  )
}

export default WorkExperience