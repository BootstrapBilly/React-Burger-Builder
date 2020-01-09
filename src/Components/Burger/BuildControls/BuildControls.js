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

    let emptyIngredients = true;

    for (let ingredient in props.currentIngredients){

        if(props.currentIngredients[ingredient] > 0){

            emptyIngredients = false;

        }

    }

    return (

        <div className={classes.BuildControls}>

            <p>Current Price : £ <strong>{props.price.toFixed(2)}</strong></p>

            {controls.map(control => <BuildControl key={control.label} label={control.label} moreClicked={()=> props.ingredientAdded(control.type)} lessClicked={()=> props.ingredientRemoved(control.type)} currentIngredients={props.currentIngredients} type={control.type} />)}

            {emptyIngredients ? null : <button onClick={props.showModal} className={classes.OrderButton}>ORDER NOW</button>}

        </div>

    )


}

export default BuildControls