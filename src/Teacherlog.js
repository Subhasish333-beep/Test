import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {fetchTeach} from './Reduux'
import { Link } from 'react-router-dom';
export default function Teacherlog(){
   const state = useSelector((state)=>state)
    const {teach} = state.teach
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchTeach())
    },[])
    console.log(teach)
    const [logteach,setteach] = useState({
        "Email" : "",
        "password" : ""
    })
    let name, value
    const handleChange=(e)=>{
        name=e.target.name
        value=e.target.value
        setteach({
            ...logteach,
            [name] : value
        })
    }
    console.log(logteach)
    const handleclick=()=>{
        var flag="false"
        teach.map(item=>{
            if(item?.email===logteach.Email && item?.password===logteach.password){
                alert("login done")
                flag="true"
                window.location = "/teacher"
            }
            
        })
        if(flag=="false"){
            
                alert("Not valid user name or passsword")
                
                window.location.reload(false);
        }
    }
   
   
    return(
        
            <div className="container">
                
                <form>
                <h1>Teacher Log In Page</h1>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label" >Email address</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" name="Email" value={logteach.Email} onChange={handleChange} placeholder="Enter email id"/>
                      
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={logteach.password} onChange={handleChange}  placeholder="Enter password"/>
                    </div>
                    
                    <button type="button" className="btn btn-dark" onClick={()=>handleclick()}>Submit</button>
                    Dont have an account?<Link to="/teachreg">Register</Link>
                </form>
            </div>
        )
    
 
}