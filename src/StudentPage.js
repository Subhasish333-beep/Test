import axios from 'axios';
import React, { Component } from 'react';
export default class StudentPage extends Component{
    constructor(){
        super();
        this.state = {
            studentDetails:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:4000/newusers").then(res=>{
            console.log(res.data)
            this.setState({
                studentDetails:res.data
            })
            console.log(this.state.studentDetails)
        })
    }
   
   render(){
    return(
        <div>
        <h1>Hello Student</h1>
        {
            this.state.studentDetails.map((student)=>{
                <p>Name: student?.name</p>
            })
        }
        </div>
    )
}
}