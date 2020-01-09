import React from "react"

import classes from "./Toolbar.module.css"

import Logo from "../../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"

const Toolbar = props => {

    return (

        <React.Fragment>

        <header className={classes.Toolbar}>

            <div>MENU</div>
            
            <Logo />

            <nav className={classes.Nav}><NavigationItems/></nav>

        </header>

        </React.Fragment>

    );

}

export default Toolbar