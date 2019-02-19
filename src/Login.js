import React,{Component} from "react";
import Button from "./Button";
import InputField from "./InputField";
import './Forms.css';


class LogIn extends Component {


    render(){
        return (
            <div className = "d-flex justify-content-center align-items-center container" id = "form container">
                
                <div className = "col-md-6 col-sm-12 text-center">
                <form className = "form-signin border border-success">
                <center>
                    <div id = "show-error"></div>
                    <h1>Login</h1>
                    <div>
                    <div className = "m3">
                        <InputField type="Email" placeholder="Email ID" ClassName = 'form-control border border-success' />
                    </div>
                    <div className = "m3">
                        <InputField type="password" placeholder="Password" ClassName = 'form-control border border-success' />
                    </div>
                    </div>
                    
                    <Button name="LOG IN" ClassName = "btn btn-success m3"/>
                </center>
                  </form>
                  </div>
                
            </div>
        );

    }

}
export default LogIn;