import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Todos extends Component{
    constructor()
    {
        super()
        this.state = {
            persons:[]
        }
    }
    componentDidMount()
    {
        axios.get("https://jsonplaceholder.typicode.com/todos/").then(res=>{
            res.data.length = 10
            this.setState({
              ...this.state,
              persons:res.data})
          });
    }


 
    render()
    {
        return(
            <div>
                
                {
                    
                     this.state.persons.map(person => <div>
                        <td>{person.id}</td>
                        <td>{person.userId}</td>
                        <td>{person.title}</td>
                        <td>{person.completed}</td>
                        <td><Link to="/todos">Edit</Link></td>
                        </div>)
            

                }
                  
                
                 </div>
                
        )
    }
    }

export default Todos