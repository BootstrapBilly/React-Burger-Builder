import React from "react"

import classes from "./Button.module.css"

const Button = props => {

    return (

        <React.Fragment>

            <button className={classes.Button} style={{backgroundColor:props.color}} onClick={props.onClick}>{props.buttonText}</button>

        </React.Fragment>

    );

}

export default Button