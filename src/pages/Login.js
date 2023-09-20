import React ,{useState,useEffect} from 'react';
import './Auth.css';
import { getAuth,onAuthStateChanged,signInWithEmailAndPassword,signOut} from 'firebase/auth';
import { app } from '@/app/DB/Api-db';
import Home from '@/app/page1';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from '@/Components/SideNav';

export default function Login() {
 
    const auth = getAuth(app);
    const[user,setUser]=useState(null);
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
           if(user){
             setUser(user);
           }
           else{
              setUser(null);
           }
        })
      },[]);

      
    function signIn(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then((value)=>alert('User Login Successfully...'))
        .catch((err)=>alert('Invalid Details entered...Please Fill again.'));
    }

      if(user===null){
        return (
            <div className="section auth">
              <div className='container-fluid'>
                <SideNav/>
                <div className='auth row justify-content-center'>   
                  <div className='col-md-5 mt-4 colAuth align-self-center'> 
                  <h1>Login : </h1>
                  <label>E-mail : </label>
                  <input type='email' required placeholder='enter E-mail...' onChange={(e)=>setEmail(e.target.value)} id='email'/><br/>

                  <label>Password : </label>
                 <input type='password' required placeholder='enter Password...' onChange={(e)=>setPassword(e.target.value)} id='pass'/><br/>
 
                  <button className='loginBtn' onClick={signIn}>Login</button>
                   <Link href={'/SignUp'}>Create Account</Link>
                </div>
                  <div className='col-md-5 mt-4 colAuth'>
                    <img src='https://cdn4.sharechat.com/img_473531_26e48274_1673013471093_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=093_sc.jpg' className='img-fluid' style={{height:'500px'}}/>
                  </div> 
                  
            </div>
           </div> 
          </div>  
          )
       }
    
        return (
        
        <div className="section loginPage">
          <div className='container-fluid'>
            <div className='row'>
            <div className='col-md-12'>    
            <h2 style={{margin:'20px'}}>Hello , <span style={{color:'red'}}>{user.email}</span></h2>
              <Home/>
            <p>Thanks for Visiting our Site...</p>
            <button onClick={()=>signOut(auth)} className="logoutBtn bg-primary text-white rounded-pill">Logout</button>
        </div>
       </div>
       </div>
       </div>     
      )
}
