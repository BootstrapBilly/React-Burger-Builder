import React from "react"

import LogoImage from "../../Assets/Images/burger-logo.png"

import classes from "./Logo.module.css"

const Logo = props => (

<div className={classes.Logo}>

    <img src={LogoImage} alt="No lodo" />
    
</div>

);

export default Logo