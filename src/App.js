import React from 'react';
import './App.css';
import Welcome from './Component/welcome';
import Nav from './Component/navbar';
import SignUp from './Component/signup';
import SignIn from './Component/signin';
import SideNav from './Component/sidenav';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
    <switch>
    <Route path="/" exact component={Welcome}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/signin" component={SignIn}/>
    <Route path="/sidenav" component={SideNav}/>
    </switch>
   
     
    </div>
    </Router>
    
  );
}

export default App;
