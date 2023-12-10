'use client'
import React, { useEffect, useState } from 'react' 
import styles from './styles.module.scss' 
import { useRouter } from 'next/navigation';
import { createUserDocumentFromAuth, signInWithGooglePopup } from '@/utils/firebase.utils';

const Admin = () => {    
  const router = useRouter();
  const [error, setError] = useState('');
 
  const handleLoginWithGoogle = async () => {
    try {
      const response = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(response?.user);
      
      console.log('Successful sign in!');
      setError('')
      router.push('/edit') 
    } catch (error: any) {
      console.log('error: ', error);
      console.log('Failed sign in!');
      setError('User does not exist. Sign in not allowed!');
    }
  };

  return (
    <div className={styles.page_wrapper}>
      <form className={styles.from}>
        <h2>Welcome back!</h2> 
        <p>To access the admin panel, please sign in using administrator credentials!</p> 
        <button type='button' onClick={handleLoginWithGoogle}>Sign in with Google</button> 
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form> 
    </div>
  )
}

export default Admin