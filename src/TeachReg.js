
import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function TeachReg() {
    const [teacher,setteacher]=useState({
        "name":"",
        "email":"",
        "password":"",
        "role":""
        
    })
    const param=new URLSearchParams();
    let name, value
const handleInput=(e)=>{
        
        name=e.target.name
        value = e.target.value
        setteacher({
            ...teacher,
            [name]:value
        })
    }

const handlepost=()=>{
    //e.preventDefault();
   param.append("name", teacher.name);
   param.append("email", teacher.email);
   param.append("password", teacher.password);
   param.append("role", teacher.role);
   
    axios.post("http://localhost:4000/newteacher", param,{
        headers:{
            'content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res=>{
        alert("Registration Successful")
        console.log("ok")
        window.location.reload(false);
        
    })
    

}
    return (
        <div className="container">
            <form className="RegisterPage">

                <h1 className="RegisterHead">Teacher Register Page</h1>


                <div className="form-group">
                    <label className="RegisterLabel">Name</label>
                    <input type="text" className="form-control" placeholder="Enter Your Name" name="name" value={teacher.name} onChange={handleInput}/>
                </div>

                <div className="form-group">
                    <label className="RegisterLabel">Email</label>
                    <input type="email" className="form-control" placeholder="Enter your Email." name="email" value={teacher.email} onChange={handleInput}/>
                </div>
                <div className="form-group">
                    <label className="RegisterLabel">Password</label>
                    <input type="password" className="form-control" placeholder="Enter your Password." name="password" value={teacher.password} onChange={handleInput}/>
                </div>
                <div className="form-group">
                    <label className="RegisterLabel">Role</label>
                    <input type="text" className="form-control" placeholder="Enter your Role." name="role" value={teacher.role} onChange={handleInput}/>
                </div>

                
                                                                                
                <button type="button" className="btn btn-dark btn-lg btn-block" onClick={()=>handlepost()}>Sign Up</button>
                <Link to="/teaclogin">Login</Link>
            </form>            
        </div>
    )
}
