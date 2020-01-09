import React, {useState} from "react"

import Burger from "../../Components/Burger/Burger"
import BuildControls from "../../Components/Burger/BuildControls/BuildControls"

const BurgerBuilder = () => {

    const [ingredients] = useState({salad : 0, bacon : 0, cheese : 0, meat : 0})

    return (

        <React.Fragment>

     

                <Burger ingredients={ingredients} />

     


                <BuildControls/>

            
        </React.Fragment>

    )
}

export default BurgerBuilder