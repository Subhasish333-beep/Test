import React from 'react';
import {Link} from 'react-router-dom';

export default function(){
    return(
        <div className = "cont">
            Enter accoding to your role
            <br/>
            <br/>
            <br/>
        <Link to="/login"><button className="btn btn-danger">Students</button></Link>
        <Link to="/teaclogin"><button className="btn btn-danger">Teacher</button></Link>
        </div>
    )
}