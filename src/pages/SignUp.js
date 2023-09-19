import React,{useState} from 'react';
import './Auth.css';
import { getAuth ,createUserWithEmailAndPassword, onAuthStateChanged,signOut} from "firebase/auth";
import { app } from '@/app/DB/Api-db';

export default function SignUp() {
  const auth = getAuth(app);

  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
    

  function createAccount(e){
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password).then((value)=>alert('Account Created Successfully.'));
};

  return (
    <div className='signUp'>
       <h1>Create Account</h1>
       <form>
        <label>E-Mail : </label>
        <input type='email' value={email} required placeholder='Enter E-mail...' id='email' onChange={(e)=>setEmail(e.target.value)}/><br/>

        <label>Password : </label>
        <input type='password' value={password} required placeholder='Enter Password...' id='pass' onChange={(e)=>setPassword(e.target.value)}/><br/>

        <button onClick={createAccount} className='createBtn'>Create Account</button>
       </form>
    </div>
  )
}
