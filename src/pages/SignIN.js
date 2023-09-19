import React ,{useState} from 'react'
import './Auth.css';
import { getAuth ,signInWithEmailAndPassword, onAuthStateChanged,signOut} from "firebase/auth";
import { app } from '@/app/DB/Api-db';

export default function SignIN() {
   
    const auth = getAuth(app);

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    function signIn(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then((value)=>alert('User Login Successfully...'))
        .catch((err)=>alert('Invalid Details entered...Please Fill again.'));
    }

  return (
    <div className='signIn'>
      <h1>Login : </h1>
      <label>E-mail : </label>
      <input type='email' required placeholder='enter E-mail...' onChange={(e)=>setEmail(e.target.value)} id='email'/><br/>

      <label>Password : </label>
      <input type='password' required placeholder='enter Password...' onChange={(e)=>setPassword(e.target.value)} id='pass'/><br/>
 
      <button className='loginBtn' onClick={signIn}>Login</button>
    </div>
  )
}
