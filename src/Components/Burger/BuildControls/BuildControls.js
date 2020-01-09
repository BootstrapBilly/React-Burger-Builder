import React from "react"

import classes from "./BuildControls.module.css"

import BuildControl from "./BuildConrol/BuildControl"

const controls = [

    {label: "Salad", type:"salad"},
    {label: "Cheese", type:"cheese"},
    {label: "Bacon", type:"bacon"},
    {label: "Meat", type:"meat"},

]

const BuildControls = props => {

    return (

        <div className={classes.BuildControls}>

            {controls.map(control => <BuildControl key={control.label} label={control.label} moreClicked={()=> props.ingredientAdded(control.type)} lessClicked={()=> props.ingredientRemoved(control.type)} currentIngredients={props.currentIngredients} type={control.type} />)}

        </div>

    )


}

export default BuildControls