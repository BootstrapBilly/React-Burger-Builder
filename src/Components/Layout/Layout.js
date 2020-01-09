import React from "react"

import classes from "./Layout.module.css"

import Toolbar from "../Navigation/Toolbar/Toolbar/Toolbar"

const Layout = props => (

    <React.Fragment>

        <div>

            <Toolbar />

            SideDrawer, Backdrop
    
        </div>

        <main className={classes.Content}>

            {props.children}

        </main>

    </React.Fragment>

);

export default Layout