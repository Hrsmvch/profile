'use client'
import React, { useContext, useEffect, useState } from 'react' 
import styles from './styles.module.scss' 
import { useRouter } from 'next/navigation';
import { createUserDocumentFromAuth, signInUserWithEmailAndPassword, signInWithGooglePopup } from '@/utils/firebase.utils';
import { UserContext } from '@/context/user.context';
import { getDoc } from 'firebase/firestore';

const Admin = () => {    
  const router = useRouter();
  
  const [code, setCode] = useState(''); 
  const [error, setError] = useState('');

  const { setCurrentUser } = useContext(UserContext);
 
  // const handleLoginWithCreds = async () => { 
  //   const response = signInUserWithEmailAndPassword({email, password}) 
  // }
  // const handleLoginWithGoogle = async () => {
  //   try {
  //     await signInWithGooglePopup();
 
  //     setError('')
  //     router.push('/edit') 
  //   } catch (error: any) {
  //     setError('User does not exist. Sign in not allowed!');
  //   }
  // };

  const handleCode = () => {
    if(code == process.env.NEXT_PUBLIC_ADMIN_KEY){  
        setError('');
        document.cookie = `${'adminKey'}=${process.env.NEXT_PUBLIC_ADMIN_KEY};path=/`;   
        router.push(`/edit`)
        return
  
    }
    setError('Incorrect code. Try again later!'); 
  }

  return (
    <div className={styles.page_wrapper}>
      <form className={styles.from}>
        <h2>Welcome back!</h2> 
        <p>To access the admin panel, please sign in using administrator credentials!</p> 

        <input type="text" placeholder='Access code' onChange={(e: any) => setCode(e.target.value)} />  
        <button type='button' onClick={handleCode}>Sign in</button> 
        {/* <button type='button' onClick={handleLoginWithCreds}>Sign in</button>  */}
        {/* <button type='button' onClick={handleLoginWithGoogle}>Sign in with Google</button>  */}
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form> 
    </div>
  )
}

export default Admin