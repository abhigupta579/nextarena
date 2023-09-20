import React,{useState} from 'react';
import './Auth.css';
import { getAuth ,createUserWithEmailAndPassword, onAuthStateChanged,signOut} from "firebase/auth";
import { app } from '@/app/DB/Api-db';
import SideNav from '@/Components/SideNav';

export default function SignUp() {
  const auth = getAuth(app);

  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
    

  function createAccount(e){
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password).then((value)=>alert('Account Created Successfully.'));
};

  return (
    <div className="section auth" style={{backgroundColor:"lightcoral"}}>
    <div className='container-fluid'>
      <SideNav/>
      <div className='auth row justify-content-center'>   
      <div className='col-md-5 mt-4 colAuth align-self-center'> 
       <h1>Create Account</h1>
       <form>
        <label>E-Mail : </label>
        <input type='email' value={email} required placeholder='Enter E-mail...' id='email' onChange={(e)=>setEmail(e.target.value)}/><br/>

        <label>Password : </label>
        <input type='password' value={password} required placeholder='Enter Password...' id='pass' onChange={(e)=>setPassword(e.target.value)}/><br/>

        <button onClick={createAccount} className='createBtn'>Create Account</button>
       </form>
    </div>
    <div className='col-md-5 mt-4 colAuth'>
      <img src='https://cdn4.sharechat.com/img_473531_26e48274_1673013471093_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=093_sc.jpg' className='img-fluid' style={{height:'500px'}}/>
    </div> 
   </div>
  </div>
 </div>   
  )
}
