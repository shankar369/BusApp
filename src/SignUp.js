import React, {Component} from "react"
import Button from "./Button"
import InputField from './InputField'
import './Forms.css';



class SignUp extends Component {

    render(){
        return (
            <div className = "d-flex justify-content-center align-items-center container" id = "form container">
                
                <div className = "col-md-6 col-sm-12 text-center">
                <form className = "form-signin border border-primary">
                <center>
                    <div id = "show-error"></div>
                    <h1>SignUp</h1>
                    <div>
                    <div className = "m3">
                        <InputField type="Email" placeholder="Email ID" ClassName = 'form-control border border-primary' />
                    </div>
                    <div className = "m3">
                        <InputField type="password" placeholder="Password" ClassName = 'form-control border border-primary' />
                        <InputField type="password" placeholder="Re-enter password" ClassName = 'form-control border border-primary' />
                    </div>
                    </div>
                    
                    <Button name="SIGN UP" ClassName = "btn btn-primary m3"/>
                </center>
                  </form>
                  </div>
                
            </div>
        )
    }
}
export default SignUp