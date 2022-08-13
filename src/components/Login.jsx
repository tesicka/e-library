import React from 'react'
import { useState } from "react"
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import '../LoginAndRegister.css';

const Login = () => {

    const[userData, setUserData] = useState({
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

    function handleLogin(e){
        e.preventDefault();
        axios.post("api/login", userData).then(res=>{
            console.log(res.data);
            if(res.data.success === true){
                window.sessionStorage.setItem("auth_token", res.data.access_token);
              //  addToken(res.data.access_token);
              //  navigate("/");
            }
        }).catch(e=>{
            console.log(e)
        });
    }

  return (
    <div class="login-page">
    <h3 className='login'>Login form</h3>
    <div class="form">
      <form  onSubmit={handleLogin} class="login-form">
        <input type="email" placeholder="email" name="email" onInput={handleInput}/>
        <input type="password" placeholder="password" name="password" onInput={handleInput}/>
        <button type='sumbit'>login</button>
        <p className="small fw-bold mt-2 pt-1 nb-0">You don't have account? 
        <a href="/register" className="link-danger">Register</a></p>
      </form>
    </div>
  </div>
  )
}

export default Login
