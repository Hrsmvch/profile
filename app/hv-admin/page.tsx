'use client'
import React, { useEffect, useState } from 'react'
// import {signIn} from 'next-auth/react'
import styles from './styles.module.scss'
import getCookie from '@/utils/getCookieValue';
import { useRouter } from 'next/navigation';

const Admin = () => {   
  const [email, setEmail] = useState('');
  const [password, setPsw] = useState(''); 
 

  const [error, setError] = useState(false);

  const handleAuth = () => {
    // signIn('credentials', {email, password, redirect: true, callbackUrl: '/'} )
  };
  return (
    <div className={styles.page_wrapper}>
      <form className={styles.from}>
        <h2>Welcome back!</h2>  

        <input
          type="text"
          placeholder="Your email/username.."
          onChange={(e: any) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Your password"
          onChange={(e: any) => setPsw(e.target.value)}
        />
        <button type='button' onClick={handleAuth}>Sign in</button>

      </form>
      <div className={styles.keys_image}></div>
    </div>
  )
}

export default Admin