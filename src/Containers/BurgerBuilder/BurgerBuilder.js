import React, {useState} from "react"

import Burger from "../../Components/Burger/Burger"

const BurgerBuilder = () => {

    const [ingredients, setIngredients] = useState({salad : 1, bacon : 1, cheese : 2, meat : 2})

    return (

        <React.Fragment>

            <div>

                <Burger ingredients={ingredients} />

            </div>

            <div>

                Build controls
            </div>
            
        </React.Fragment>

    )
}

export default BurgerBuilder