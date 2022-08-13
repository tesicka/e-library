import React from 'react'
import '../LoginAndRegister.css'
import { useState } from "react"
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Register() {

    const[userData, setUserData] = useState({
        name: "",
        email:"",
        password: "",
    });

    let navigate = useNavigate();

    function handleInput(e){
        let newUserData = userData;
        newUserData[e.target.name] = e.target.value;
        console.log(newUserData)
       setUserData(newUserData);
    }
    function handleRegister(e){
        e.preventDefault();
        axios.post("api/register", userData).then(res=>{
            console.log(res.data);
            navigate("/login");
        }).catch(e=>{
            console.log(e)
        });
    }
  return (
    <div class="register-page">
    <h3 className='register'>Registration form</h3>
    <div class="form">
      <form onSubmit={handleRegister} class="register-form">
      <input type="text" placeholder="name and surname" name="name" onInput={handleInput}/>
        <input type="email" placeholder="email" name="email" onInput={handleInput}/>
        <input type="password" placeholder="password" name="password" onInput={handleInput}/>
        <button type='sumbit'>register</button>
      </form>
    </div>
  </div>
  )
}

export default Register
