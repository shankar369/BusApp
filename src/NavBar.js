import React, {Component} from 'react';
import Button from "./Button";
import { BrowserRouter , Route,NavLink} from 'react-router-dom'

class NavBar extends Component{


    render(){
        return(

                <div>
                   
                    
                


                        <ul class="nav justify-content-end bg-primary">
                            <li class="nav-item">{
                            this.props.login ? (
                                <a class="nav-link active pull-right" href="#"><NavLink to ="/routes"><Button name = "Routes List" ClassName = "pull-right btn btn-block btn-warning"/></NavLink></a>
                                 ) : (
                                 <a className="nav-link active "><NavLink to ="/signup"><Button name = "Sign Up" ClassName = "pull-right btn btn-block btn-success"/></NavLink></a>
                             )
                            }
                            </li>
                            
                        </ul>
                        
                                  
                
                    
                </div> 
        )
    }
}

export default NavBar;


