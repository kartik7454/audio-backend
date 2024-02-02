


import { useState,useEffect } from "react";
import '../App.css';
import { Sidebar } from "../components/sidebar";

import {useNavigate } from "react-router-dom"

function Register() {
    const history = useNavigate()
    

    const handleSubmit= async (e)=>{
    
        e.preventDefault()
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        const logincred ={username,email,password}
        console.log(username)
    
         const response = await fetch('/register',{
             method:"POST",
             body :JSON.stringify(logincred),//convert to json from object
             headers:{
                 'Content-Type':'application/json'
             }
         })
         const json = await response.json()
         if (!response.ok){
            alert("email already exists") 
             
            
         }
         if (response.ok){
        
          
            window.location.href = "http://localhost:3000/login";
            
         }
       }

 return(<div>
 <div className="loginbox">
 <form onSubmit={handleSubmit}>
    <div className="register">
<div><h1>register</h1></div>

<div><label>username</label></div>
<br></br>
<input  placeholder="username" maxlength="15" id= "username"  required></input>
<br></br>
<div><label>email</label>
<br></br></div>
<br></br>
    <input type="email" maxlength="50" placeholder="e-mail" id= "email"  required></input>
    
    <div><label>password</label></div>
    <br></br>
    <div><input type="password" placeholder="password" maxlength="10" id ="password" required></input>
    </div>
    <br></br>
    <div><button className="submit">submit</button></div>
    </div></form>
    <br></br>
    <a href="http://localhost:3000/login">login </a>
 </div>
 
 
 
 
 
 </div>



 )
    
}

export {Register}  ;