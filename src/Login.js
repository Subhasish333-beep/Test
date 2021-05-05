import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {fetchStud} from './Reduux'
import { Link } from 'react-router-dom';
import './Log.css'
export default function Login() {
    const state=useSelector((state)=>state)
    const {stud}=state.stud
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(fetchStud())
    },[])
    console.log(stud)
    const [logstud,setlogstud] = useState({
        "Email" : "",
        "password" : ""
    })
    let name, value
    const handleChange=(e)=>{
        name=e.target.name
        value=e.target.value
        setlogstud({
            ...logstud,
            [name] : value
        })
    }
    console.log(logstud)
    const handleclick=()=>{
        var flag="false"
        stud.map(item=>{
            if(item?.email===logstud.Email && item?.password===logstud.password){
               alert("Login Successful")
               flag="true"
                window.location = "/student"
            }
            
        })
        if(flag=="false"){
            
            alert("Not valid user name or passsword")
            
            window.location.reload(false);
    }
    }
    return (
        <div className="container">
            
            <form>
            <h1>Student Log In Page</h1>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label" >Email address</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" name="Email" value={logstud.Email} onChange={handleChange} placeholder="Enter email id"/>
                  
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={logstud.password} onChange={handleChange}  placeholder="Enter password"/>
                </div>
                
                <button type="button" className="btn btn-dark" onClick={()=>handleclick()}>Submit</button>
                Dont have an account?<Link to="/reg">Register</Link>
            </form>
        </div>
    )
}
