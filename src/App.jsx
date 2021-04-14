import React,{Component} from 'react';
import {BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import NotFound from './NotFound';
import Todos from './Todos';

export default class App extends Component{
  render()
  {
    return(
<div>
  <Router>
  <NavBar/>
    <Switch>
    
  <Route exact path="/" component={()=><Redirect to="/home"/>}/>
  <Route path="/Todos" component={Todos}/>
  <Route path="/home" component={Home}/>
  <Route component={NotFound}/>
  </Switch>

  </Router>
  
</div>

      )

  }
}