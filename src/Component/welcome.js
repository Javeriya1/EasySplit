import React,{Component}from 'react'
import './welcome.css';
import{Link}from 'react-router-dom';

class Welcome extends Component{
    render()
    {
        return(
            <div>
            <h1>Welcome to Easy Split</h1>
            <p></p>
            <button onClick={this.clickHandler}>
            <Link to='/signup'>SigUp
            </Link>
            </button>&nbsp;&nbsp;&nbsp;

            <button onClick={this.clickHandler}>
            <Link to='/signin'>SignIn
            </Link>
            </button>
            </div>
        ) 
    }
}
export default Welcome;