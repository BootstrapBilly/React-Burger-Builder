import React from "react"

const OrderSummary = props => {


   const ArrayOfProps = Object.keys(props.ingredients)

   const list = ArrayOfProps.map(key => <li key={key}><span style={{textTransform: "capitalize"}}>{key}</span> : {props.ingredients[key]}</li>) 

    return (

        <React.Fragment>

            <h3>Your Order</h3>
            <p>A Big Boi Burger with the following ingredients:</p>

            <ul>

                {list}

            </ul>

            <p>Continue to checkout</p>

        </React.Fragment>
    );

}

export default OrderSummary