import React, { useState } from 'react';
import {screen} from '@testing-library/react'

function Form(props) {

    const obj = {
        name:/^\w+$/i,
        email:/^\w+@/,
        mobile:/^\d+$/,
        password:/\w{6}/,
        // address:/\w{4}/
    }

    const [msg,setMsg] = useState('');
    
    const callSubmit = (e) => {
        e.preventDefault();
  
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const phNumber = document.querySelector('#phoneNumber').value;
        const password = document.querySelector('#password').value;
        const gender = document.querySelector('#gender').value;
       
  if(name == '' && email == '' || phNumber == '' || password == ''){
        setMsg('All fields are mandatory');
        return;
  }

       if(!obj.name.test(name)){
        // window.alert('Name is not alphanumeric');
        setMsg('Name is not alphanumeric');
        return;
       }
       if(!obj.email.test(email)){
        setMsg('Email must contain @');
        return;
       }
           if(gender != 'male' && gender != 'female' && gender !='other' ){
            setMsg('Please identify as male, female or others');
            return;
           }

           if(!obj.mobile.test(phNumber)){
            setMsg('Phone Number must contain only numbers');
            return;
           }

           if(!obj.password.test(password)){
            setMsg('Password must contain atleast 6 letters');
            return;
           }
let uName = email.split('@')[0];
uName = `Hello ${uName}`;
setMsg(uName);

        
    }
    return (
        <div>
            <form onSubmit={callSubmit}>
            <label>Name
            <input data-testid = 'name' id='name' type='text'/>
            </label>

            <label >email
            <input data-testid = 'email' id='email' type='text'/>
            </label>

            <label>Gender
            <select data-testid = 'gender' id='gender'>
                <option value="male" selected >male</option>
                <option value='female' >female</option>
                <option value='other' >other</option>
            </select>
            </label>

            <label>phoneNumber
            <input data-testid = 'phoneNumber' id='phoneNumber' type='text'/>
            </label>

            <label>password
            <input data-testid = 'password' id='password' type='password'/>
            </label>

            <button data-testid = 'submit' type='submit'>Submit</button>
            </form>
            <div>{msg}</div>
        </div>
    );
}

export default Form;