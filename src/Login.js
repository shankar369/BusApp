import React,{Component} from "react";
import Button from "./Button";
import InputField from "./InputField";
import './Forms.css';
import * as firebase from 'firebase';
import ReactDOM from 'react-dom';
import SignUp from './SignUp'
import {withRouter} from 'react-router-dom';

class LogIn extends Component {

    constructor(){
        super();
        this.auth = firebase.auth();
        
    }

    signInUser = () => {
        const userName = document.querySelector("#Input-UserName").value;
        const password = document.querySelector("#Input-Password").value;
        const promise = this.auth.signInWithEmailAndPassword(userName,password);
        promise
        .then(user => {
            
            console.log(user);
            this.props.history.push("./routes");
        }
        )
        .catch(err =>{ 
            console.log("Error in Login : ",err);
            const alert = (
                <div className="alert alert-danger" role="alert">
                Invalid User Details
              </div>
            )
            ReactDOM.render(alert,document.getElementById("show-error"))
            setTimeout(()=> {
                var item = document.getElementById("show-error");
                item.parentNode.removeChild(item);
            },1000)
        }) 
    }

    signUpUser = (e) => {
        ReactDOM.render(<SignUp />,document.getElementById('root'))
     }

   

    render(){
        return (
            <div>
                <nav className="navbar bg-primary justify-content-between">
                    <img className="navbar-nav" src={require("./logo.png")}/>
                </nav>
            <div className = "d-flex justify-content-center align-items-center container" id = "form container">
                
                <div className = "col-md-6 col-sm-12 text-center">
                <form className = "form-signin border border-success">
                <center>
                    <h1>Login</h1>
                    <div id = "show-error"></div>
                    <div>
                    <div className = "m3">
                        <InputField type="text" placeholder="Email ID" ClassName = 'form-control border border-success' id = "Input-UserName"/>
                    </div>
                    <div className = "m3">
                        <InputField type="password" placeholder="Password" ClassName = 'form-control border border-success' id = "Input-Password" />
                    </div>
                    </div>
                    
                    <Button clickFunction = {this.signInUser} name="LOG IN" ClassName = "btn btn-success m3"/>
                    <Button clickFunction = {this.signUpUser} name="SIGN UP" ClassName = "btn btn-info m3"/>
                </center>
                  </form>
                  </div>
                
            </div>
            </div>
        );

    }

}
export default LogIn;