'use client'
import React, { useEffect, useState } from 'react'
import styles from "../styles.module.scss"; 
import { useRouter } from 'next/navigation';
import getCookie from '@/utils/getCookieValue';

const WelcomeForm = () => {
  const router = useRouter(); 

  const [userKey, setUserKey] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const isAuthenticated = getCookie('userKey');  
    if (isAuthenticated) router.push('/');  
  }, []);


  const handleKey = (event: any) => {
    event.preventDefault(); 
    
    if (userKey == process.env.NEXT_PUBLIC_USER_KEY) {
      setError(false);
      document.cookie = `${'userKey'}=${process.env.NEXT_PUBLIC_USER_SECRET_KEY};path=/`;  
      // window.location.reload();
      router.push(`/`)
      return
    } 
    setError(true); 
  };

  return (
    <form>
      <input
        className={error ? styles.error : ''}
        onChange={(e) => {
          setError(false)
          setUserKey(e.target.value)
        }}
        type="text"
        placeholder="Type key here.."
      />
      <button onClick={(e) => handleKey(e)}>Go</button>
    </form> 
  )
}

export default WelcomeForm
