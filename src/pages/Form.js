
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import  '@/components/Weekly.css';
import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '@/app/DB/Api-db';
import { Button } from 'react-bootstrap';
import './Form.css';


export default function Form() {

  var data1={
      firstName: '',
      lastName: '',   
      eMail: '',
      phoneNo: '',
      company:''
    
  }

   const[formData,setFormData]=useState(data1);

   async function sendData(){  // sendData fxn is created to send Data to firebase...
    const timestamp = Date.now().toString();//timestamp is Inbuilt fxn used to Update Id
    formData.id = timestamp;                //formData.id is created to give Random ID's...
    const docRef = doc(collection(db, 'nextArena'), timestamp);
    await setDoc(docRef, formData);
    
  }

   function changeData(e){
    setFormData({...formData,[e.target.name]:e.target.value});
   }
   function submitData(e){
    e.preventDefault();
    console.log(formData);
    sendData();
    alert('Data Added successfully...Thanks')

   }

    return (
    <div className='section colorDark-change-5x formAdd'>
      <div className='container'>
      <h1>LET&apos;S GET YOUR BRAND IN THE GAME.</h1>
        <div className='row'>
          <div className='col-md-12 colForm'>
           <form onSubmit={submitData}>
        <input type='text' name='firstName' id='firstName' placeholder='First Name' required onChange={changeData}/>

        <input type='text' name='lastName' id='lastName' placeholder='Last Name' required onChange={changeData}/><br/>

        <input type='text' name='eMail' id='eMail' placeholder='E-Mail' required onChange={changeData}/>
        
        <input type='text' name='phoneNo' id='phoneNo' placeholder='Phone No.' required onChange={changeData}/><br/>

        <textarea rows={4} cols={50} name='company' id='company' placeholder='Please tell something about your Company...' required onChange={changeData}/>
        <br/>
        <Button type='submit' className='bg-danger border-rounded-pill submitBtn'>Submit Form</Button>
           </form>
         </div>
        </div>
      </div>     
    </div>
 
  )
}
