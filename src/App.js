import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Login from './Login';
import Teacherlog from './Teacherlog';
import TeachReg from './TeachReg';
import Register from './Register';
import StudentPage from './StudentPage';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import TeacherHome from './TeacherHome';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Switch>
         <Route exact path="/" component={()=><Redirect to="/home"/>}/>
         <Route exact path="/home" component={()=><Home/>}/>
         <Route exact path="/login" component={()=><Login/>}/>
         <Route exact path="/reg" component={()=><Register/>}/>
         <Route exact path="/teaclogin" component={()=><Teacherlog/>}/>
         <Route exact path="/teachreg" component={()=><TeachReg/>}/>
         <Route exact path="/student" component={()=><StudentPage/>}/>
         <Route exact path="/teacher" component={()=><TeacherHome/>}/>

       </Switch>
    
     </BrowserRouter>
     
      
    </div>
  );
}

export default App;
