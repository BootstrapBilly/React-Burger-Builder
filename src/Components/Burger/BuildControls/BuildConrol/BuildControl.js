import React from "react"

import classes from "./BuildControl.module.css"

const BuildControl = props => {

    return (

        <div className={classes.BuildControl}>

            <div className={classes.Label}>{props.label}</div>

            {props.currentIngredients[props.type] > 0 ? <button className={classes.Less} onClick={props.lessClicked}>Less</button> : null}
            
            <button className={classes.More} onClick={props.moreClicked}>More</button>

        </div>

    )


}

export default BuildControl