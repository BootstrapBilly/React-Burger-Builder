import React from "react"

import classes from "./Burger.module.css";

import BurgerIngredient from "./BurgerIngredients/BurgerIngredient"

const Burger = props => {

    const transformedIngredientsKeys = Object.keys(props.ingredients)
    .map(key => {

        return [...Array(props.ingredients[key])].map((_, i) => {
           return <BurgerIngredient key={key + i} type={key} />
        })
    })

    console.log(transformedIngredientsKeys)

    return (

        <div className={classes.Burger}>

            <BurgerIngredient type="bread-top" />
            {transformedIngredientsKeys}
            <BurgerIngredient type="bread-bottom" />

        </div>
    );

}

export default Burger