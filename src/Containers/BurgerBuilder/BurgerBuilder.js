import React, {useState} from "react"

import Burger from "../../Components/Burger/Burger"
import BuildControls from "../../Components/Burger/BuildControls/BuildControls"
import Modal from "../../Components/GeneralUI/Modal/Modal"
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary"

const INGREDIENT_PRICES = {

    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7

}

const BurgerBuilder = () => {

    const [ingredients, setIngredients] = useState({salad : 0, bacon : 0, cheese : 0, meat : 0})
    const [price, setPrice] = useState(4)
    const [showModal, setShowModal] = useState(false)

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

                <Modal show={showModal} clickOut={()=> setShowModal(false)}><OrderSummary price={price} ingredients={ingredients} onClickCancel={()=> setShowModal(false)} onClickConfirm={()=> alert("Lock arf")}/></Modal>

                <Burger ingredients={ingredients} />

                <BuildControls showModal={()=> setShowModal(true)} price={price} currentIngredients={ingredients} ingredientAdded={(type)=> addIngredient(type)} ingredientRemoved={(type)=> {

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