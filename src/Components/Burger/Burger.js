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
    .reduce((initialArrayThisFunctionIsCalledOn, currentValOfThatInitialArray) => {

        return initialArrayThisFunctionIsCalledOn.concat(currentValOfThatInitialArray)

    }, [])

    return (

        <div className={classes.Burger}>

            <BurgerIngredient type="bread-top" />

            {transformedIngredientsKeys.length < 1 ? <p>Add some ingredients</p> : transformedIngredientsKeys}

            <BurgerIngredient type="bread-bottom" />

        </div>
    );

}

export default Burger