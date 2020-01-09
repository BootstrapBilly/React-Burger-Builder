import React, {useState} from "react"

import Burger from "../../Components/Burger/Burger"
import BuildControls from "../../Components/Burger/BuildControls/BuildControls"

const INGREDIENT_PRICES = {

    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7

}

const BurgerBuilder = () => {

    const [ingredients, setIngredients] = useState({salad : 0, bacon : 0, cheese : 0, meat : 0})
    const [price, setPrice] = useState(4)

    const addIngredient = type => {
        
        const oldIngredientCount = ingredients[type]
        const updatedCount = oldIngredientCount + 1

        const updatedIngredients = {

            ...ingredients
        }

        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type]

        setIngredients(updatedIngredients)
        setPrice(price + priceAddition)

    }

    const removeIngredient = type => {

        const oldIngredientCount = ingredients[type]
        const updatedCount = oldIngredientCount - 1

        const updatedIngredients = {

            ...ingredients
        }

        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type]

        setIngredients(updatedIngredients)
        setPrice(price - priceAddition)

    }

    return (

        <React.Fragment>

                <Burger ingredients={ingredients} />

                <BuildControls currentIngredients={ingredients} ingredientAdded={(type)=> addIngredient(type)} ingredientRemoved={(type)=> {

                    if(ingredients[type] > 0){

                    removeIngredient(type)

                    }

                    else {

                        return

                    }
                    
                    }}/>
      
        </React.Fragment>

    )
}

export default BurgerBuilder