import React from 'react'
import styles from './styles.module.scss';


const SummaryContent = () => {
  return ( 
    <section className={styles.about}>
    <div className={styles.container}>
      <div className={styles.about_content}>
        <div className={styles.text}>
          <div className={styles.heading}>Hello!</div>
          <div className={styles.description}>
            {`I'm excited to have you here. My name is Halyna, and I'm a dedicated web developer and designer from Kyiv, Ukraine.`}
            <br />
            <br />
            {`I graduated from “Igor Sikorsky Kyiv Polytechnic Institute” in Ukraine. I have bachelor’s degree in “Computer system and networks” and master’s degree in “Programming of technologies for computer systems and networks”.`}
            <br />
            <br />
            {`At present, I'm fortunate to be a part of the dynamic team at Tallium, where I put my skills and creativity to work, building exceptional websites that leave a lasting impact.`}
            <br />
            <br />
            {`Simplicity is a fundamental principle that underlies my work. I firmly believe that simplicity and elegance go hand in hand, and it's my mission to design user interfaces that are not only aesthetically pleasing but also intuitive and user-friendly.`}
            <br />
            <br />
            {`My tech stack at work are React, Next.js, Redux, TypeScript and SASS. (I don't touch the back-end often, but in case you're interested, it's MERN stack, which includes MongoDB, Express.js, React.js, and Node.js.)`}
          </div>
        </div>

        <div className={styles.image}>
          <img src={''} alt="" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default SummaryContent