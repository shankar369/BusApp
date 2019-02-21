import React, {Component} from "react"
import Button from "./Button"
import InputField from './InputField'
import './Forms.css';
import * as firebase from "firebase";
import ReactDOM from 'react-dom';
import LogIn from './Login'


class SignUp extends Component {

    constructor(){
        
        super();
        this.auth = firebase.auth();
        
    }

    showError(alert , Class){
        const Alert = (
            <div className={Class} role="alert">
                {alert}
            </div>
        )
        ReactDOM.render(Alert,document.getElementById("show-error"))
        setTimeout(()=> {
            var item = document.getElementById("show-error");
            item.parentNode.removeChild(item);
        },3000)
    }

    signUpUser = () => {
        const userName = document.querySelector("#SInput-UserName").value;
        const password = document.querySelector("#SInput-Password").value;
        const ConfirmPassword = document.querySelector("#SInput-ConfirmPassoword").value;
        
        if(password !== ConfirmPassword){
            this.showError("Please check your password","alert alert-danger");
            
        }
        
        else{
            console.log(userName,password);
            const promise = this.auth.createUserWithEmailAndPassword(userName,password); 
            promise
            .then(user => {
                console.log(user);
                
                ReactDOM.render(<LogIn />, document.getElementById('root'));
                this.showError("Signed Up Successfully!","alert alert-success");
            })
            .catch(err =>{ 
                console.log(err)
                if(err.code === "auth/email-already-in-use"){
                        this.showError("Email already in use","alert alert-danger");
                  }
                if(err.code === "auth/invalid-email"){
                    this.showError("Invalid Email ID","alert alert-danger");
                }
                else{
                    this.showError("Something went wrong","alert alert-danger");
                }
            })
        }
    }




    render(){
        return (


             <div>                                                                          
                <nav className="navbar bg-primary justify-content-between">        
                    <img className="navbar-nav" src={require("./logo.png")}/>
                </nav> 

            <div className = "d-flex justify-content-center align-items-center container" id = "form container">
                
                <div className = "col-md-6 col-sm-12 text-center">
                <form className = "form-signin border border-primary">
                <center>
                    <h1>SignUp</h1>
                    <div id = "show-error"></div>
                    <div>
                    <div className = "m3">
                        <InputField type="type" placeholder="Email ID" ClassName = 'form-control border border-primary'  id = "SInput-UserName"/>
                    </div>
                    <div className = "m3">
                        <InputField type="password" placeholder="Password" ClassName = 'form-control border border-primary' id = "SInput-Password"/>
                        <InputField type="password" placeholder="Re-enter password" ClassName = 'form-control border border-primary' id = "SInput-ConfirmPassoword" />
                    </div>
                    </div>
                    
                    <Button clickFunction = {this.signUpUser} name="SIGN UP" ClassName = "btn btn-primary m3"/>
                </center>
                  </form>
                  </div>
             </div>   
            </div>
        )
    }
}
export default SignUp