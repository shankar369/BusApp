import React from "react"
const Button = (props) =>{
    return(
        <div className = "m3">
             <button onClick = {props.clickFunction} type="button" className = {props.ClassName} >{props.name}</button>
        </div>
    );

}
export default Button;