import React from 'react'
import WelcomeForm from './components/form'
import styles from "./styles.module.scss"

const Welcome = () => { 
  return (
    <div className={styles.welcome_page}>
      <div className={styles.info}> 
        <h2>Access key</h2>

        <p className={styles.inform_message}>
          To access this application, you need a valid access key. Please enter the key below to proceed.
        </p>

        <WelcomeForm /> 

        <p className={styles.no_key}>
          If you don't have an access key, you won't be able to access the content.
        </p> 
      </div>
      <div className={styles.keys_image}></div>
    </div>
  )
}

export default Welcome