import React from 'react';

const InputField = (props) =>{

    return(
        <input type = {props.type} placeholder = {props.placeholder} className = {props.ClassName} id ="input-field" />
    )

}

export default InputField;