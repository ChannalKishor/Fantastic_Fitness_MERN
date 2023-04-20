
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../Actions/userAction";



export default function LoginPage({...props}){
    const [userName, setUserName] = useState('');
    // console.log(userName);
    const [password, setPassword] = useState('');
    // console.log(password);
    const [email, setEmail] = useState('');
    // console.log(email);
    const navigate = useNavigate();

    const handleSignIn = async(e) => {
        e.preventDefault();
   userLogin(userName,email,password)
    .then((res) => {
        console.log(res)
        if(res.data.validate){
            props.handle();
            navigate('/home')
           }
        else{
            alert('Enter valid credentials', res.message);
           }
    }).catch((error) => {
        console.log(error)
    });
    }
    return(
        <div className="login-page">
            <h1> Login Page</h1>
            <form className="box">
            <label>
                    Email:
                    <input type="text" className="login-input" onChange={(event)=>{setEmail(event.target.value)}}/>
                </label>
                <br/>
                <label>
                    Username:
                    <input type="text" className="login-input" onChange={(event)=>{setUserName(event.target.value)}} />
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" className="login-input" onChange={(event)=>{setPassword(event.target.value)}}/>
                </label>
                <br/>
                <button type="submit" className="login-button" onClick={(e)=>handleSignIn(e)}>Sign In</button>
            </form>
        </div>
    )
}