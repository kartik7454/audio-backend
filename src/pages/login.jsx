


import { useState,useEffect } from "react";
import '../App.css';
import { Sidebar } from "../components/sidebar";
import { Podcastbox } from "../components/podcastbox";
import {redirect, useNavigate } from "react-router-dom"




function Login() {
    const history = useNavigate();
    const history = useNavigate();
    const [visi    ,setvisi] = useState(false)

    const handleSubmit= async (e)=>{
    
        e.preventDefault()
        
        var email = document.getElementById("email2").value;
        var password = document.getElementById("password2").value;
        const logincred ={email,password}
        
    
         const response = await fetch('https://audioback.onrender.com/login',{
             method:"POST",
             body :JSON.stringify(logincred),//convert to json from object
             headers:{
                 'Content-Type':'application/json'
             }
         })
         const json = await response.json()
         if (!response.ok){
           alert("email does not exist /wrong password ")
             }
         if (response.ok){
            
            
            history("/");
            
            }
       }
return(<div className="loginbox">
<form onSubmit={handleSubmit}>
    <div className="login">
<div><h1>login</h1></div>
<div><label>email</label></div>
    <input type="email" maxlength="50" placeholder="e-mail" id= "email2"  required></input>
    
    <div><label>password</label></div>
    <div><input type="password" maxlength="10" placeholder="password" id ="password2" required></input>
    </div>
    <br></br>
    <div><button className="submit">SUBMIT</button></div>
    </div></form>
    <br></br>
    <a href="http://localhost:3000/register">register</a>

    
    </div>
)
}

export {Login}  ;
