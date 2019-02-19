import React from "react"
const Button = (props) =>{
    return(
        <div className = "m3">
             <button type="button" className = {props.ClassName} >{props.name}</button>
        </div>
    );

}
export default Button;