import React from 'react';
import './signup.css';
import './sidenav.js';
import{Redirect} from 'react-router-dom';
class SignIn extends React.Component {
    constructor()
    {
      super();
      this.state={
        name: " ",
        password:" ",
        nameError:" ",
        passwordError:" ",
      }
    }
    valid()
    {

      if(this.state.name.includes(" ") && this.state.password.includes(" "))
      {
        this.setState({nameError:"please enter the name",passwordError:"please enter the password"})
      }
      if(this.state.name==='javeriya' && this.state.password==='123')
      {
        window.location.pathname='/signup';
        
      }
      else
      {
       if(!this.state.name==='javeriya')
       {
        this.setState({nameError:"please enter the correct name"});
       }
       else if(!this.state.password==='123')
       {
        this.setState({passwordError:"please enter the correct password"});
       }
      }

    }
    submit()
    {
  
      if(this.valid())
      {
       alert("valid");
      }
     
    }
    render()
    {
      return(
        <div classname="">
        <h1>SignIn</h1>
        <p></p>
        <input type="text" placeholder="username" onChange={(event)=>{this.setState({name:event.target.value})}}/>
        <p style={{color:"red",fontsize:"14px"}}>{this.state.nameError}</p>
        <input type="password"  placeholder="password" onChange={(event)=>{this.setState({password:event.target.value})}}/>
        <p style={{color:"red",fontsize:"14px"}}>{this.state.passwordError}</p>
        <button onClick={()=>this.submit()}>Submit</button>
        </div>
      );
    }
    }

export default SignIn;